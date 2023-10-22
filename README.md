# week2-javascript-hw

Generating a CSR 
```
openssl genrsa -out key.pem
```

Generating a Private Key
```
openssl req -new -key key.pem -out csr.pem
```

Installing a Certificate On Your Server
```
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
```
