# Scrambler Solution: Samuel McHugh

## Run Web Server

``` shell
$ lein ring server
```

## Run UI
```shell
$ shadow-cljs watch app
```

## Testing
``` shell
  $ shadow-cljs compile test && node out/node-tests.js && lein test test.handler-test
```
