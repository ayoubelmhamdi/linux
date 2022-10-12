# connect by adb
### usb
- Enable `usb debugging`
- Select `PTP (Picture Transfer Protocol)`
```bash
adb kill-server
adb start-server
adb devices
adb usb
```
# Doidcam cli
```bash
adb forward tcp:4747 tcp:4747
droidcam-cli 127.0.0.1 4747
```

# adb online only
- get the serial using the usb cable for the first time
```
\$ adb devices
```
connect using the `ip` of my phone

- active `adb` without root
```bash
\$ adb -s XXXXX
```
- connect
```bash
adb connect 192.168.82.207:5555
```

