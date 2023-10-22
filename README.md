# week2-javascript-hw

Below is the steps to install SSL certificates. SSL certificates allow web servers to encrypt their traffic, and also offer a mechanism to validate server identities to their visitors. Websites using SSL are accessed via the https:// protocol.

- Generating a CSR 
```
openssl genrsa -out key.pem
```

- Generating a Private Key
```
openssl req -new -key key.pem -out csr.pem
```

- Installing a Certificate On Your Server
```
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
```
