### notify (Notifications)
```bash
xbps-install -Sy notify-osd
```

# export some variables
with lightdm, we should use `source ~/.xinitrc`, or put it into `~/.zprofile`.
for terminal use only:
```bash
eval `dbus-launch --auto-syntax`
```

# kerring manual solution:
it used for passkey on chromium.

## set no password
secret-tool store --label=login user $USER domain auto-unlock 2>/dev/null || echo " keyring not configured"
## revert
secret-tool clear user "$USER" domain auto-unlock


# LIGHTDM
## Suppose Voidlinux use LightDM:

| Login Method          | PAM Service Option                        | Config File                    |
|-----------------------|-------------------------------------------|--------------------------------|
| Normal password login | `pam-service=lightdm`                     | `/etc/pam.d/lightdm`           |
| Autologin             | `pam-autologin-service=lightdm-autologin` | `/etc/pam.d/lightdm-autologin` |

```ini
autologin-session=dwm
# autologin-user=mhamdi
# autologin-user-timeout=0
```

If `autologin-user` is commented out or not set in `/etc/lightdm/lightdm.conf`, LightDM will use the normal login flow.


```text
sudoedit /etc/pam.d/lightdm
```

Add these lines in the appropriate sections:

```pam
auth       optional     pam_gnome_keyring.so
session    optional     pam_gnome_keyring.so auto_start
```

```sh
sudo sv restart lightdm
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

To ensure `anydesk` (as one of the stupid software on linux), i switch to use `lightdm`:

- /etc/lightdm/lightdm.conf 

> NOTE: maybe the user ~/.xprofile file already auto source itself using Xsession bash script
> to ensure `~/.xinitrc` sourced we should modify the `~/.xinitrc`
  # i dont understand.
```bash
[Seat:*]
# need to be exist a file called /usr/share/xsessions/dwm.desktop 
user-session=dwm
session-wrapper=/etc/lightdm/Xsession
# change themes
greeter-session=lightdm-gtk-greeter
# autologin without password
# autologin-user=mhamdi
# autologin-user-timeout=0
autologin-session=dwm
```

# FRESH VOID SERVICES
what services runs and maybe help if we remove them accidentally.
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


- do not use features from `bash` or `zsh` , `Xsession` use sh shell( it's secure).
- This file also mark the i3 as the `user-session` in `/var/lib/AccountsService/users/mhamdi`, why i do not kown this Stupidity.
