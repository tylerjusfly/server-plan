## Server Planner Service

### Prerequisites

This API was written in Nodejs/Express and designed to calculate How many server hardware is needed for a specific number of Virtual Manchines

### Installation.

```bash
$ npm install
```

### Running the app on Docker

```bash

```

Clone the repository

```
$ git clone
```

Change directory into the project

```
$ cd ServerPlanner
```

Then build docker image

```
$ docker build -t <a docker image name> .
```

Run application

```
$ docker run -dp 4242:4242 <the docker image name above>
```

### Endpoint

| Endpoint               | HTTP Method | Description                                                       |
| ---------------------- | ----------- | ----------------------------------------------------------------- |
| http://localhost:4242/ | GET         | Returns a welcome message to test app is working                  |
| http://localhost:4242/ | POST        | Returns the number of virtual machines the server can accommodate |

### Send this with the post request

{
"serverType" : {"CPU" : 4, "RAM" : 32, "HDD" : 500 },

"VM" : [
{"CPU" : 1, "RAM" : 16, "HDD" : 32 },
{"CPU" : 1, "RAM" : 16, "HDD" : 10 },
{ "CPU" : 2, "RAM" : 32, "HDD" : 100 },
]
}

## To run test

`npm test`

## THANK YOU
