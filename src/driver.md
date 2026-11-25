# Driver

# tailscaled
```json
  "inbounds": [{
    "type": "tun",
    "address": ["172.19.0.1/30"],
    "auto_route": true,
    "strict_route": true,
    // "route_exclude_address": ["100.0.0.0/10"] // this maybe need to activate
  }],
```


## FIX WIFI driver wl Connexion
if we succeful install the nonfree `broadcom-wl-dkms` pkg and wifi not work, maybe the wl not loaded from `broadcom`.
```bash
$ cat /usr/lib/modules-load.d/wl.conf
wl
$ cat /etc/modules-load.d/wl.conf
# empty
$ cat /etc/modprobe.d/blacklist.conf
# empty
$ cat /usr/lib/modprobe.d/wl.conf
#### blacklist for maybe initramfs or udev loading ####
#### Do not let anything load wl automatically (e.g. the initramfs's udev).
blacklist wl

# black list this: not workon my pc too.
blacklist b43
blacklist b43legacy
blacklist ssb
blacklist bcm43xx
blacklist bcma
blacklist brcm80211
blacklist brcmfmac
blacklist brcmsmac
# blacklist cfg80211 # do not prevent this module, because it's needed with wl.ko driver.

$ cat /usr/lib/modprobe.d/blacklist.conf
blacklist cirrusfb
blacklist hgafb
blacklist i8xx_tco
blacklist intelfb
blacklist kyrofb
blacklist neofb
blacklist nvidiafb
blacklist radeonfb
blacklist rivafb
blacklist tridentfb
blacklist vga16fb
```

# general aproach

### list the kernel modules:
this list shown the the name of kernel module for the used kernel driver.
```bash
lspci -knn
```

### how to disable `nouveau`
```bash
$ xbps-remove -vROo -F mesa-nouveau-dri xf86-video-nouveau
$ sudo xbps-install -S bbswitch nvidia390 nvidia390-opencl

$ cat /etc/modprobe.d/nouveau_blacklist.conf
# To block nouveau drivers: https://askubuntu.com/questions/841876/how-to-disable-nouveau-kernel-driver
blacklist nouveau
options nouveau modeset=0

$ uname -r
6.12
$ sudo xbps-reconfigure -f linux6.12


$ cat /etc/default/grub | grep GRUB_CMDLINE_LINUX_DEFAULT
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash nouveau.modeset=0"
$ update-grub
```

### get the used `GPU` now
```bash
glxinfo | grep 'renderer string'
```

### Use two carts graphic for power performance: optimums
- using the `Proprietary` driver `nvidia`

By default, all apps will run by ` internal GPU`, but if you want to run an app
with `GPU` change the value of `DRI_PRIME` to `1`.
```bash
DRI_PRIME=1 app
```
- Install `nvidia`

install last [nvidia](https://docs.voidlinux.org/config/graphical-session/graphics-drivers/nvidia.html#reverting-from-nvidia-to-nouveau) drivers first, then if the `log` from `dmesg` tell you, what's drivers should be installed in your system
```bash
xbps-install -S nvidia # or nvidia470 or nvidia390
```
- check if this driver wasn't marking as `blacklist`

verify at `/etc/modprobe.d/nouveau_blacklist.conf`,
`/usr/lib/modprobe.d/nvidia.conf`, or `/usr/lib/modprobe.d/nvidia-dkms.conf` by
commenting it out.

nvidia require module `bbswitch`

```bash
xbps-install -S bbswitch
```

### usbs drivers
```bash
lsusb -t
```

```bash
inxi -Fxxxz
```


### to remove extra dkms modules
```bash
dkms status
sudo dkms remove v4l2loopback/0.12.5 --all
xbps-reconfigure -f linux5.19
```
