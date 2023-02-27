# Xrandr
- grep mobitor :
```
xrandr -q |grep connected

eDP1 connected primary 1280x800+0+0 (normal left inverted right x axis y axis) 217mm x 135mm
DP1 disconnected (normal left inverted right x axis y axis)
HDMI1 disconnected (normal left inverted right x axis y axis)
VIRTUAL1 disconnected (normal left inverted right x axis y axis)
```
 - change from 0 to 1
```
xrandr --output eDPy --brightness 0.5

```


# Backlight

- use cli to change to 50%
```bash
$ xbacklight -set 50
```

- use echo to /sys/.../file
```bash
echo 937 | sudo tee /sys/class/backlight/intel_backlight/actual_brightness
```

### screen saver
use 300 seconde to go to screen saver
```bash
xset s 300
```

# fix i3status-rs
we should use `elogind` that provide an service for `dbus` like `systemd` that help to adjuste the backlight.
```bash
xbps-install -y elogind
sudo ln -s /etc/sv/elogind/ /var/service
```
then logout or reboot.
