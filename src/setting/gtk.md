# Install theme
```bash
xbps-install -Sy lxappearance
```
### all theme store in
```bash
ls /usr/share/themes
```
### lxappearance show standard themes without
one or this tow `repo`
```bash
xbps-install -Sy gnome-themes-standard
xbps-install -Sy gtk-engine-murrine
```

# compile some theme by messon
```bash
xbps-install -Sy sassc glib-devel
```

# cursor
```bash
xbps-install -Sy breeze-purple-cursor-theme
```

# gtk debug error
```bash
# if you export this var like that:
export GTK_DEBUG="interactive"

# to disable one time
unset GTK_DEBUG

# or from .bashrc to disable it completely
unset export GTK_DEBUG="interactive"
```
