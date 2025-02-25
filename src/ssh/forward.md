From a local computer, we can typically log in via SSH using the following
command: `ssh -p 8022 server_user@server_ip`

Next, run `python3 -m http.server -d ./src 8080` on the server.

But, directly accessing the server's content through
`http://serverip:server_port` may not work due to security restrictions. We can
overcome this using SSH tunneling.

For instance, on Android, we must first choose a valid port (e.g., 8080) for
the server (ports like 3000 and 80 may not be valid). After running the server
(e.g., mdbook, Python), the content will not be immediately accessible locally.
We need to establish a forward tunnel to the server, mapping the server's port
to a local port (e.g., 3001).

```bash
ssh -p 8022 -L 3001:localhost:8080 -L 3002:localhost:8081 server_user@server_ip
```

Now, the server's content will be accessible locally via
`http://127.0.0.1:3001/`.

Therefore, to ensure proper website functionality, we must identify an
available port on the server and utilize SSH tunnel forwarding. 
