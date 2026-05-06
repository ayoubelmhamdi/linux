### notify
```bash
xbps-install -Sy notify-osd
```

# export some variables
```bash
eval `dbus-launch --auto-syntax`
```

### elogind
- `elogind` could be essentiel to initialise `$XDG_RUNTIME_DIR` to `/run/user/1000`.
- but `elogind` could be make contradiction with dwm when it's run `dbus-run-session dwm`.
- use `agetty-tty1` service to start Xserver meant run a tty server (i do not know way this stupidity).
- to fix it i try iniliaze variables manualy but `loginctl` can not read them
  correclty, so apps like `anydesk` doesnt work.
```bash
$ loginctl show-session "$XDG_SESSION_ID" -p Type -p Display -p TTY -p Seat -p Active
```

To ensure `anydesk` (as one of the stupped software on linux) i switch to use `lightdm`:

- /etc/lightdm/lightdm.conf 

```bash
[Seat:*]
# need to be exist a file called /usr/share/xsessions/dwm.desktop 
user-session=dwm

# hake it to run ~/.zprofile (or symlink it to ~/.profile)
# hake it to execte ~/.xinitrc
session-wrapper=/etc/lightdm/Xsession

# change themes
greeter-session=lightdm-gtk-greeter

autologin-user=mhamdi
autologin-user-timeout=0
autologin-session=dwm
```

what services runs and maybe help:
```
$ ls /var/service         
acpid -> /etc/sv/acpid/
agetty-tty2 -> /etc/sv/agetty-tty2/
agetty-tty3 -> /etc/sv/agetty-tty3/
agetty-tty4 -> /etc/sv/agetty-tty4/
agetty-tty5 -> /etc/sv/agetty-tty5/
agetty-tty6 -> /etc/sv/agetty-tty6/
udevd -> /etc/sv/udevd/
dbus -> /etc/sv/dbus/
lightdm -> /etc/sv/lightdm/
nanoklogd -> /etc/sv/nanoklogd/
socklog-unix -> /etc/sv/socklog-unix/
```


- Avoid use `bash` or `zsh` features, `Xsession` use sh shell.

- This file also store user-session (i3 or dwm) `/var/lib/AccountsService/users/mhamdi`, why i do not kown this stupidity

