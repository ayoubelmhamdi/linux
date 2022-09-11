# How to switch bettwin layout arabic/us in keybroad

you can use sxhkd 
```
# keybroad layout us
alt + shift + u
    setxkbmap us
    
# keybroad layot arabic
alt + shift + a
    setxkbmap ara
    
```
or use `Ctrl` and `Alt` 
```
setxkbmap -layout us,ara -option grp:ctrl_alt_toggle
```
# How remap key in lunix
## to get key code on use xev:
```bash
xev | awk -F'[ )]+' '/^KeyPress/ { a[NR+2] } NR in a { printf "%-3s %s\n", $5, $8 }'
```
## to remap on use xmodmap/setxkbmap...
```bash
xmodmap -e 'keycode 66 = Shift_L'
```

