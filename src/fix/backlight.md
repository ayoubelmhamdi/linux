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
