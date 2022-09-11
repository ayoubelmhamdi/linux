# how to login to phone
  - use `SimpleSSHD.apk` open source
    - create dirs (home,ssh) in your andoid:
      - SimpleSSHD.apk: change `Home Directory -> /storage/emulated/0`
      - SimpleSSHD.apk: change `SSH PATH -> /storage/emulated/0/.ssh`
    - SimpleSSHD.apk: get ip:
        ip is showing in your apk like `192.168.43.1`
      - port the default is `2222`
  - linux: remove error login from `~/.ssh/known_hosts` like: `github.com ssh-ed25519 AAAAC3NzaC1lZ` 

```bash
$ cat ~/.ssh/id_rsa.pub |
    ssh 192.168.43.1 -p 2222 "cat >> /storage/emulated/0/.ssh/authorized_keys"
```

# in-local: remote(file) -> local : recive
```bash
$ scp -P8022 username@remote:/file/to/send /where/to/put
```
# in-local: local(file) -> remote : send
```bash
$ scp -P8022 /file/to/send username@remote:/where/to/put
```

# in-remote: remote(file) -> local : recive
# in-remote: local(file) -> remote : send

# How to mount termux by sshfs in linux
```sh
sshfs u0_a133@192.168.43.1:/data/data/com.termux/files/home/ -p 8022 /mnt/termux
```
# To use vpn by ssh
use premiusa2.vpnjantit.com:22
my number in voip: +1 442  946  2073
