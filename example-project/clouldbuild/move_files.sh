#!/bin/bash

# In the Dockerfile, we installed the dependencies in the working directory /project-dir/,
# so we now need to copy those into the Cloud Build WORKDIR (which is /workspace/) in order to have
# our installed files.
cp -rT /project-dir/ /workspace/

# To run python tests
ln -sf /workspace/cloudbuild  /workspace/src/cloudbuild
