
```bash
mkdir /mnt/freebsd
mount /dev/da0s1 /mnt/freebsd
chroot /mnt/freebsd /bin/env -i TERM=\$TERM /bin/csh
```
