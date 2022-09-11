# unmut all, But danger
```bash
amixer scontrols | grep -oE "'.*'" | awk -F\' \
 '{print "amixer -c 0 set \""$2"\" unmute 100"}' >> ~/speaker.txt
 ```

