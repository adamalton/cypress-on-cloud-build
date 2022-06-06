FROM ubuntu:bionic

ARG DOCKER_COMPOSE_VERSION

# https://docs.docker.com/compose/install/
RUN \
   apt-get -y update && \
   apt-get -y install bash ca-certificates curl docker.io && \
   rm -rf /var/lib/apt/lists/* && \
   curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && \
   chmod +x /usr/local/bin/docker-compose

# Make the docker-compose path available, even if we use a different entrypoint (which we do)
ENV PATH="/usr/local/bin/:${PATH}"

ENTRYPOINT ["/usr/local/bin/docker-compose"]
