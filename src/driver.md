# Driver

### get name of kenel module for all drivers
```bash
lspci -v
```
### ? disable `nouveau`
```bash
\$ cat /etc/default/grub
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash nouveau.modeset=0"

\$ update-grub
```
### get the used 'GPU' at now
```bash
glxinfo | grep 'renderer string'
```

### Use tow cart graphic for power performance
- using the `Proprietary` driver `nvidia`

all app will run by `iGPU`, but if you want to run an app with `GPU`
change the value of `DRI_PRIME` to `1`.
```bash
DRI_PRIME=1 app
```
- instalaltion

check if this package is installed [nvidia](https://docs.voidlinux.org/config/graphical-session/graphics-drivers/nvidia.html#reverting-from-nvidia-to-nouveau)
```bash
xbps-install -S nvidia # or nvidia470 or nvidia390
```
- check if driver if has not in `blacklist`

 verify in `/etc/modprobe.d/nouveau_blacklist.conf`, `/usr/lib/modprobe.d/nvidia.conf`,
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

# remove (uninstall/block) driver
```bash
blacklist nouveau
op
```
```bash
xbps-reconfigure -f linux5.19
```

### remove extra dkms modules
```bash
dkms status
sudo dkms remove v4l2loopback/0.12.5 --all
xbps-reconfigure -f linux5.19
```
