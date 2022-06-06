#!/bin/bash

docker-compose --file cloudbuild/docker-compose-for-cypress.yaml run --use-aliases cypress

# Now kill the dependent containers which have been fired up.
# I'm not certain that this is necessary, but the internet suggests that it might be.
docker-compose down
