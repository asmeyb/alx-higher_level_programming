#!/bin/bash
# size of the body of an url

curl -sI "$1" | grep -i Content-Length | cut -d' ' -f2
