from http.server import HTTPServer, BaseHTTPRequestHandler

server_address = ('', 8000)
httpd = HTTPServer(server_address, BaseHTTPRequestHandler)
httpd.serve_forever()
