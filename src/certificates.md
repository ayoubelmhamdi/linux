# manual install certificate

first, downaoad the certificate, and we should rename it, to be end with `.crt` and located into `/usr/local/share/ca-certificates/`:

```bash
$ wget ....
$ copy  /tmp/mitmproxy-ca-cert.pem → /usr/local/share/ca-certificates/mitmproxy-ca-cert.crt
$ sudo update-ca-certificates
```
