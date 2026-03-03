# Overlay fs mount xbps
this use to mount to `dir` in one `dir`
```bash
\$ sudo mount -t overlay overlay -o lowerdir=/opt/xbps-src/void-packages:/opt/xbps-src/ayoub,upperdir=/opt/xbps-src/xbps-up,workdir=/opt/xbps-src/xbps-work /opt/xbps-src/xbps-merg
```
# mount pkg for void-packages

- don't use `ln` or `ln -s`
- use `mount --bind`:

```bash
\$ mkdir /path/to/new/dir
\$ mount --bind /path/to/dir /path/to/new/dir
```

# fix mounted directory
some `shared` library not word in `tmpfs/shm`, I should remount with permission to `exec`
```bash
mount --bind /path/to/dir /new/dir
mount -o remount,exec,bind  /new/dir
```

# Mount USB Without Root

exFAT expects `fmask=0000` by default → it shows all Linux files as `777` rather than their original permissions.
So we need to set `fmask` and `dmask` explicitly:

```bash
sudo mount -t exfat -o uid=$(id -u),gid=$(id -g),fmask=0133,dmask=0022 /dev/sdb1 /mnt/usb
```

