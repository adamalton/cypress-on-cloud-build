#!/bin/bash
echo "Building docker-compose image..."
cd /workspace/cloudbuild/docker-compose

docker build \
    -t gcr.io/example-project/docker-compose:latest \
    --cache-from gcr.io/example-project/docker-compose:latest \
    --build-arg DOCKER_COMPOSE_VERSION=1.28.2 \
    -f ./Dockerfile .
