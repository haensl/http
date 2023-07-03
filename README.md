# @haensl/http

Simple JSON support module bundling common HTTP headers, status codes and methods.

[![NPM](https://nodei.co/npm/@haensl%2Fhttp.png?downloads=true)](https://nodei.co/npm/@haensl%2Fhttp/)

[![npm version](https://badge.fury.io/js/@haensl%2Fhttp.svg)](http://badge.fury.io/js/@haensl%2Fhttp)
[![CircleCI](https://circleci.com/gh/haensl/http.svg?style=svg)](https://circleci.com/gh/haensl/http)


## Installation

### Via `npm`

```bash
$ npm install -S @haensl/http
```

### Via `yarn`

```bash
$ yarn add @haensl/http
```

## Usage

1. [Install @haensl/http](#installation)

2. Use http status codes, methods and headers in your projects:


    ESM, i.e. `import`

    ```javascript
    import { statusCodes} from '@haensl/http';

    // ...
    const response = await fetch(url);

    if (response.statusCode < statusCodes.badRequest) {
      // do stuff when response status code < 400
    }

    // ...
    ```

    CJS, i.e. `require`

    ```javascript
    const { headers, methods } = require('@haensl/http');

    // ...
    const requestOptions = {
      headers: {
        [headers.contentType]: 'application/json'
      },
      method: methods.post,
      body: JSON.stringify(data)
    };

    const response = await fetch(url, requestOptions);

    // ...
    ```

## Synopsis

The `http` object is a simple JSON object that maps status codes, headers and strings:

```javascript
{
  "statusCodes": {
    "ok": 200,
    "created": 201,
    "accepted": 202,
    // ...
  },
  "headers": {
    "accept": "Accept",
    "accessControl": {
      "allowOrigin": "Access-Control-Allow-Origin",
      // ...
    },
    "authorization": "Authorization",
    "contentType": "Content-Type",
    // ...
  },
  "methods": {
    "delete": "delete",
    "get": "get",
    // ...
  }
}
```

### [JSON](index.json)

**Attention:** This JSON object is not exhaustive(, yet)! If you need a status code, header or method added, please [create a feature request](https://github.com/haensl/http/issues/new?labels=feature%20request)

## [Changelog](CHANGELOG.md)

