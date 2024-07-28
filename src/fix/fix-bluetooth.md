# Bluetooth Setup and Troubleshooting on Void Linux

This guide will help you install and troubleshoot Bluetooth on Void Linux, specifically for Broadcom Bluetooth adapters.

## INSTALL

1. **Install Necessary Packages**:
   Install the required firmware and packages for Bluetooth functionality:

   ```bash
   xbps-install -S broadcom-bt-firmware
   xbps-install -S bluez bluez-alsa pipewire elogind # elogind is used by pipewire to create the /run/user/1000 directory
   ```

## FIX

1. **Load Bluetooth Modules**:
   Ensure the necessary Bluetooth kernel modules are loaded:

   ```bash
   modprobe btusb
   modprobe bluetooth
   ```

2. **Unblock Bluetooth**:
   Make sure Bluetooth is not blocked:

   ```bash
   rfkill unblock bluetooth
   ```

3. **Enable Services**:
   Enable and start the required services:

   ```bash
   ln -s /etc/sv/elogind /var/service
   ln -s /etc/sv/bluetoothd /var/service
   ```

## GET MISSING FIRMWARE FILES

1. **Download and Install Missing Firmware**:
   If your Bluetooth adapter requires specific firmware files, download and place them in the correct directory:

   ```bash
   mkdir -p /lib/firmware/brcm
   wget -O /lib/firmware/brcm/BCM43142A0-04ca-2006.hcd https://github.com/winterheart/broadcom-bt-firmware/raw/master/brcm/BCM43142A0-04ca-2006.hcd
   ```

2. **Reload Bluetooth Modules and Restart Service**:
   Reload the Bluetooth modules and restart the Bluetooth service to apply changes:

   ```bash
   modprobe -r btusb
   sv restart bluetoothd
   ```

## LOG USEFUL INFORMATION FOR TROUBLESHOOTING

1. **Check for Errors in Kernel Logs**:
   Use `dmesg` to check for Bluetooth-related errors, such as missing firmware files:

   ```bash
   dmesg | grep -i bluetooth
   ```

2. **Verify Firmware File**:
   Ensure the firmware file is correctly placed in the `/lib/firmware/brcm/` directory:

   ```bash
   ls /lib/firmware/brcm/BCM43142A0-04ca-2006.hcd
   ```

## TROUBLESHOOTING STEPS

1. **Verify Bluetooth Service Status**:
   Ensure the Bluetooth service is running:

   ```bash
   sv status bluetoothd
   ```

2. **Check for Available Bluetooth Controllers**:
   Use `bluetoothctl` to list available Bluetooth controllers:

   ```bash
   bluetoothctl
   > list
   ```

3. **Additional Debugging**:
   If issues persist, additional debugging may be required, such as checking system logs or verifying hardware compatibility.
