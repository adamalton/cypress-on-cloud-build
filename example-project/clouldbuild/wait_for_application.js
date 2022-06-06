/* This is a Node script which tries (repeatedly) to connect to the application and only returns
    when it can connect. This needs to be run *inside* the Cypress Docker container (so that it
    delays the main Cypress command from running), otherwise Cypress tries to connect to the
    application before it's ready, and as Cypress doesn't allow the timeout/retry limits for its
    initial connection check to be configured, it will just die on its face before the application
    starts up and hence will never run the tests.
    See: https://github.com/cypress-io/cypress/issues/8870
*/

const http = require('http');
const {exec} = require('child_process');
const options = {
    hostname: 'application',
    port: 8000,
    path: '/',
    method: 'GET'
};

function checkIfReady() {
    const req = http.request(options, res => {

        if (res.statusCode === 200) {
            console.log('Got status code 200, the application is ready to accept requests.');
        } else {
            console.log(`Got status: ${res.statusCode}, which is not what we expect.`);
        }
    });

    req.on('error', error => {
        console.error(`Got error trying to connect to the application, it's probably not ready yet: ${error}`);
        setTimeout(checkIfReady, 200);
    });

    req.end();
}

checkIfReady();
