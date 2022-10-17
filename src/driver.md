# Driver

### get the name of kernel module for all drivers
```bash
lspci -knn
```
### how to disable `nouveau`
```bash
cat /etc/default/grub
```
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash nouveau.modeset=0"
```
```bash
update-grub
```
### get the used `GPU` at now
```bash
glxinfo | grep 'renderer string'
```

### Use two carts graphic for power performance: optimums
- using the `Proprietary` driver `nvidia`

By default, all apps will run by ` internal GPU`, but if you want to run an app with `GPU`
change the value of `DRI_PRIME` to `1`.
```bash
DRI_PRIME=1 app
```
- Install `nvidia`

install last [nvidia](https://docs.voidlinux.org/config/graphical-session/graphics-drivers/nvidia.html#reverting-from-nvidia-to-nouveau) drivers first, then if the `log` from `dmesg` tell you, what's drivers should be installed in your system
```bash
xbps-install -S nvidia # or nvidia470 or nvidia390
```
- check if this driver wasn't marking as `blacklist`

 verify at `/etc/modprobe.d/nouveau_blacklist.conf`, `/usr/lib/modprobe.d/nvidia.conf`,
 or `/usr/lib/modprobe.d/nvidia-dkms.conf` by commenting it out:
```bash
#blacklist nouveau
```

### usbs drivers
```bash
lsusb -t
```

```bash
inxi -Fxxxz
```

# remove (uninstall/block) driver like nouveau
at `/etc/modprobe.d/nouveau_blacklist.conf`
```bash
blacklist nouveau
options nouveau modeset=0
```
then:
```bash
xbps-reconfigure -f linux5.19
```

### to remove extra dkms modules
```bash
dkms status
sudo dkms remove v4l2loopback/0.12.5 --all
xbps-reconfigure -f linux5.19
```
