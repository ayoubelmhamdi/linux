# how to login to phone
  - install this app: `SimpleSSHD.apk`, that is an open source
    - create directory called `ssh` in your android at:
        `/storage/emulated/0/.ssh/`
      - SimpleSSHD.apk: change `Home Directory -> /storage/emulated/0`
      - SimpleSSHD.apk: change `SSH PATH -> /storage/emulated/0/.ssh`
      - get ip: the `ip` is showing in your `apk` like `192.168.43.1`
      - port the default is `2222`
      - default password should shown in `app`
  - fix error:
    - in android: remove old files in `/storage/emulated/0/.ssh/*`
    - in linux: remove old lines from `~/.ssh/known_hosts` like: `github.com ssh-ed25519 AAAAC3NzaC1lZ` 

```bash
$ cat ~/.ssh/id_rsa.pub |
    ssh 192.168.43.1 -p 2222 "cat >> /storage/emulated/0/.ssh/authorized_keys"
```

## How to mount termux by sshfs in linux
```sh
sshfs u0_a133@192.168.43.1:/data/data/com.termux/files/home/ -p 8022 /mnt/termux
```


### terminal (local): download file from remote

```bash
\$ scp -P8022 username@remote:/file/to/send /where/to/put
```


### terminal (local): upload file to remote

```bash
\$ scp -P8022 /file/to/send username@remote:/where/to/put
```

### terminal (remote): download file from local

```bash
# TODO:
```

### terminal (remote): upload file to local

```bash
# TODO:
```


### To use vpn by ssh
use`premiusa2.vpnjantit.com:22` 
my number in voip:`+1 442  946  2073` 
