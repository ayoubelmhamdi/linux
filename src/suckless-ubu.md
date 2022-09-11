# Suckless Tools
## surf
```bash
xxx webkit2gtk-devel gcr-devel

```
# How to install dwm in void-linux
# xorg
```
sudo apt install xorg
```

### Dependencies needed for compile dwm in `void linux` from scratch is:
```
sudo apt install xorg alsa build-essential libx11-dev libxinerama-dev libxft-dev git wget --no-install-recommends
```
### Dependencies needed for compile dwm in `arch linux` from scratch is:

```
sudo pacman -S base-devel libx11 libxft libxinerama freetype2 fontconfig
```
# how to use font in dwm or st or dmenu
if your are use some patch:
- you can not use multi font 
 `font[]=font[1]`
- you can not use `"mono:size=16` you must use `"mono 16"`

```c
  static const char font[] = "DejaVu Sans Mono 15";
```
- how can found name of linux
```bash
$ fc-list | awk -F: '{print $2}' | sort| uniq | grep -i "mono"
```
# How to kill script that run xsetroot (statusbar)  
```
kill -9 $(ps -ef|awk  '/ayoubStatusBar/{print $2}'|grep -v "awk"|awk 'NR==1')  
```
`print $2` becase we have pid1 and pid2  
```
pid1 myscript.sh  
pid2 root that run this scripte : like terminal , or father of this scripts  
```
`grep -v` for ignore prosess that grep for my script  
`NR==2` for return only 1er ligne : that pipe from last pipe  
`ps -ef` grep(find) pid-pross by origin script : htop not view origin scripts always

# sed command to change font with
```bash
sed -i 's/\(static char \*font = "\).......*$/\1FiraCode\ Nerd\ Font:size=15";/' config.def.h
sed -i 's/^\(static char \*font2........\).*$/\1FiraCode\ Nerd\ Font:size=15" };/' config.def.h
```
