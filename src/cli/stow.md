# zsh stow
```bash
root=\${1:-root}

mkdir -p ~/.config/zsh

stow --dir=\$HOME/stow/zsh --target=\$HOME/.config/zsh void
stow --dir=\$HOME/stow/zsh --target=\$HOME/.config/zsh universe
stow --dir=\$HOME/stow/zsh --target=\$HOME init

exit
if [[ "\$root" = "root" ]];then
    stow --dir=\$HOME/stow/zsh --target=\$HOME/.config/zsh void-root
else
    stow --dir=\$HOME/stow/zsh --target=\$HOME/.config/zsh void-home
fi

```
