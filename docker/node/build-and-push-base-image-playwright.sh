#!/bin/bash

REGISTRY=ghcr.io/chbinousamy/porsche-design-system
IMAGE=playwright
TAG=v1.39.0-focal-test

docker pull $REGISTRY/$IMAGE:latest

docker build -f Dockerfile-playwright -t $REGISTRY/$IMAGE:$TAG -t $REGISTRY/$IMAGE:latest .

docker push $REGISTRY/$IMAGE:$TAG
docker push $REGISTRY/$IMAGE:latest
