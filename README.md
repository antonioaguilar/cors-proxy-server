# cors-proxy-server
Simple CORS proxy server

## Install 

```bash
$ npm install -g cors-proxy-server
```

## Usage

```bash
$ cors-proxy-server
```

This starts the default server on the current host ```0.0.0.0``` on port ```9090```

## Configure HOST and PORT

```bash
$ HOST=192.168.0.110 PORT=8080 cors-proxy-server
```

## Examples

* ```http://localhost:9090/``` - server usage and help
* ```http://localhost:9090/http://google.com/``` - Google.com with CORS headers
* ```http://localhost:9090/https://salesforce.com/``` - Access Salesforce with CORS headers

## License

[MIT](http://opensource.org/licenses/MIT) © [Antonio Aguilar](http://www.antonio-aguilar.com), 2016. 

