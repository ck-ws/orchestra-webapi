# orchestra-webapi

`orchestra-webapi` is an adapter for [orchestra-jsapi](https://github.com/swissmanu/orchestra-jsapi). It leverages web technologies as REST and WebSockets to forward its functionality via HTTP.

## Usage
The `orchestra-webapi` module is a pluggable [Express](http://expressjs.com/) application. In addition, it provides a WebSocket server using [Primus](https://github.com/primus/primus/).
Following code demonstrates how you can attach `orchestra-webapi` to an Express instance.

```javascript
var app = require('express')()
	, webapi = require('orchestra-webapi');

app.use('/api', webapi.restApi);  // attach REST routes

webSocketApi(app.listen(8080));   // Start the HTTP server and attach WebScoket server to it
```