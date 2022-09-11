# crate swapfile
```bash
SWAPFILE="${1:-/swapfile}"
GB="${2:-4G}"

fallocate -l "$GB" "$SWAPFILE"
chmod 600 "$SWAPFILE"
mkswap "$SWAPFILE"
swapon "$SWAPFILE"
```
