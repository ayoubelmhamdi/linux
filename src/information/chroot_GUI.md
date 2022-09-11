# How to open DISPLAY in chroot envirenmet
- get auth key  

in your original pc ,execute:
```bash
xauth list

latitude/unix:0  MIT-MAGIC-COOKIE-1  d4474d13c
```
- put auth key in `~/.Xresources`  

in chrooted linux create `~/.Xresources` in first time
```bash
touch ~/.Xresources
```
- add key by executing:


```bash
xauth add latitude/unix:0  MIT-MAGIC-COOKIE-1  d4474d13c
```
#### in minimal linux:
- ubuntu
```bash
apt install x11-apps 
apt install xauth
```
