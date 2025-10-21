# EASY AND FAST FILE SHARING FROM THE COMMAND-LINE.

| Service     | Command to Upload File              | Status |
|-------------|-------------------------------------|--------|
| transfer.sh | curl -T foo.zip https://transfer.sh |  off   |
| big.tarr.hu | curl -T foo.zip http://big.tarr.hu  |  off   |
| lusk.sh     | curl -T foo.zip https://lusk.sh     |  on    |
| xtn.sh      | curl -T foo.zip https://xtn.sh      |  on    |


# NGNIX
to create an local website like `http://foo.com` from http.server `http://localhost:port/`, we can use `ngnix`:

first, after runing my server using: `python3 -m http.server 8066` and check if `curl -I http://localhost:8066/` exit normally.
we may add this line into `/etc/hosts`:

```
127.0.0.1   foo.com
```

then create nginx proxy configs:

/etc/nginx/conf.d/foo.conf
```nginx
server {
    listen 80;
    server_name foo.com;

    # Forward all traffic to your Python server on port 8077
    location / {
        proxy_pass http://127.0.0.1:8077;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
````

make sure default nginx.conf includes this config by editing `/etc/nginx/nginx.conf` and adding this inside the `http { ... }` block:

```nginx
include /etc/nginx/conf.d/*.conf;
```

so the http block should look like:

```nginx
http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    include /etc/nginx/conf.d/*.conf;
}
```


check config and restart nginx:

```bash
sudo nginx -t
sudo sv restart nginx
```


now open `http://foo.com` in browser, it should forward to your python server.
