# about
simple Rest api with deno

# references project structure
link : https://medium.com/swlh/making-apis-in-deno-83dedda9dd1f

## library
import { v4 } from 'https://deno.land/std/uuid/mod.ts'

## docker
- referense: 
  - https://hub.docker.com/r/hayd/deno
  - repo: https://github.com/hayd/deno-docker/blob/master/example/Dockerfile 
  - sudo docker build -t app . && docker run -it --init -p 8888:8000 app