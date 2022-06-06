docker-compose
==============

This folder contains the things for building a Docker image that runs `docker-compose`.

At least at the time of authoring, there isn't a `docker-compose` image available on gcr.io,
so we have to build one ourselves.

The code in this folder is a reduced/modified version of this:
https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/docker-compose
