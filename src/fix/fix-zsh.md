## zsh input and typing handled uncorrected
check if `terminfo` is build correctly, especially with `suckless/st`, in this case, we can use `sudo make install clean`.

## force using xterm-256color

if you want to use `export TERM=xterm-256color` in `.zshrc` instead of `export TERM=xterm`  
```bash
ln -sf /usr/share/terminfo/x/xterm-color /usr/share/terminfo/x/xterm-256color
export TERM=xterm-256color
```
