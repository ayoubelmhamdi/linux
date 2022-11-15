# get the window class
```bash
xprop | awk '
	/^WM_CLASS/{sub(/.* =/, "instance:"); sub(/,/, "\nclass:"); print}
	/^WM_NAME/{sub(/.* =/, "title:"); print}'
```
output:
```
instance: "Navigator"
class: "Firefox"
title: "Mozilla Firefox
```

# dwm specified some windows to specified tag
 if the some apps have tow windows, each windows should specified the `class` and `instance` and `title`, that help dwm to disting between windows 
```c
static const Rule rules[] = {
    /* class       instance      title           tags_mask isfloating   monitor */
    { "Firefox",   "Toolkit",   "Picture-in-Picture", 1 << 4,   0, -1 },
    { "Firefox",   "Navigator", "Mozilla Firefox",    1 << 3,   0, -1 },
}
```
