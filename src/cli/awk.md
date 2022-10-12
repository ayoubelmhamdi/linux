# how ram usage
```bash
\$ cat /proc/meminfo | awk 'FNR == 1 {tot=\$2} FNR==2 {free=\$2} FNR==3 {avai=\$2} FNR==4 {buf=\$2} FNR==5 {cach=\$2} FNR==21 {shem=\$2} FNR==24 {srec=\$2} {green=tot-free-(buf+cach);blue=buf;yellow=cach+srec-shem} END {print
   (tot - free - (buf + cach+srec)) / 1024}'
```
