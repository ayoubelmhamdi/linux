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
