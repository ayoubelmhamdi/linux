# FIX SOUNDS

# PIPEWIRE
install [wireplump-elogind](http://) for shared object that need elogind and active `sv status elogind`
active pipewire-pulse by uncomment this line
```
    #{ path = "/usr/bin/pipewire" args = "-c pipewire-pulse.conf" }
```

## start/Enable
no need any services, it's can run with autostart apps or .xinitrc ...

```bash
pipewire &
sleep 1 # if pipewire not running the wireplumber could not run.
wireplumber &
```

## interface
we have [pavucontrol](http://) and [helvum](http://)

## sound control
we can change sound volume using to `99%` by:
```
$ pactl set-sink-volume 0 99%
```

# OLD
-------------
- [Linux: ALSA lib pcm_dmix.c:1108:(snd_pcm_dmix_open) unable to open slave](https://dev.to/setevoy/linux-alsa-lib-pcmdmixc1108sndpcmdmixopen-unable-to-open-slave-38on)

### fix sound work by sudo only
- select `module` (driver)
```bash
$ cat /etc/modprobe.d/default.conf

options snd_hda_intel index=1
```
- check `alsamixer`
```
$ alsamixser
```
![image](./alsamixer.png)

- choose `builting audio` that not `off` in `pulsemixer`
```
$ pulsemixer
```
![image](./pulsemixer.png)


# unmout all, But danger
```bash
$ amixer scontrols | grep -oE "'.*'" | awk -F\' \
    '{print "amixer -c 0 set \""$2"\" unmute 100"}' >> ~/speaker.txt
```

