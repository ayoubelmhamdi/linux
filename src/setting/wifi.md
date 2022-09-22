# Wifi on Linux
-----------------
### unblock network
```bash
# rfkill # view all devices
# rfkill unblock bluetooth
# rfkill unblock wlan
```

### active network
Use `ip` command to bring up the `wifi` interface:

```bash
# sudo ip link set wlan0 up
```
Or `ifconfig`:
```bash
# ifconfig wlan0 up
```

### Wifi info
```bash
# iwlist wlan0 scan
```
## get Signal and name of `SSID` 
```
# iw dev wlan0 link
```
### ad-hoc

Check if your `Wifi` is supported by `AP``
```bash
# iw phy |grep -iA6 'Supported interface modes:'
```

- use `hostapd`
- use `create_ap`
