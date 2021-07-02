# What is it? 
- This repository has a NodeJS Express application configured to run 3 endpoints which serve some mock response. It uses TypeScript.
- Mock response are delayed by a random timeout to mimic network lag and delay in response time.
- The [Dockerfile](./Dockerfile) contains definition to create a docker image for the service which can be reached at port `4500`.


# Development
- `npm install` to install required packages.
- `npm run dev` to run dev server, useful if you make any changes.


# Docker

## Install docker
- If docker is not already installed, go to https://docs.docker.com/get-docker/ and set it up for whichever platform as needed.
  
## create a docker image for the service, follow the steps as outlined:
- `docker build -t <image-name>:<version> .` where `image-name` can be any name and `version` can be any version. This allows to maintain multiple versions of the docker image.  
 
## run the docker image
- `docker run --rm -d  -p 4500:4500/tcp <image-name>:<version>` which creates a docker container based on the image in detached mode (runs it in background). 

## Endpoints
- `GET /bing` To get mockdata as if querying Bing.
- `GET /yahoo` To get mockdata as if querying Yahoo.
- `GET /google` To get mockdata as if querying Google.