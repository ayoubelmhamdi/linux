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
