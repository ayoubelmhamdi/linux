# forward localhost from server to Termux.
get Termux local ips (even tailsall).
```bash
ifconfig 2> /dev/null | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '[0-9.]*'
192.168.1.23
```


run the `gradio`/`http_server/...` on port `7861` or any port allowed on server.

on `Termux`: we just need to run:

```bash
ssh -p 22 -L 7861:localhost:7861 user@ip
```

use tailscall if your router not allow ssh port 22, or for use static ip.
