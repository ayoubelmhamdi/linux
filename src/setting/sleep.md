Power management/Suspend and hibernate
========================================

Grub setting
-----------------
- UUID for `swapfile`
```bash
findmnt -no UUID -T /swapfile
```

- offset for `swapfile`
```bash
filefrag -v /swapfile | awk '$1=="0:" {print substr($4, 1, length($4)-2)}'
```

- add to `/etc/default/grub`
```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet ... resume=UUID=c20be35e-47be-4e7d-919f-966ba1edf0ea resume_offset=2224128"

```
Dracut setting
-------------------

- add the `module`
```bash
$ cat /etc/dracut.conf.d/resume.conf

add_dracutmodules+=" resume "
```

- generate the `initram`

use the `linux<x>.<y>`
```bash
$ xbps-reconfigure -f linux5.18
```
