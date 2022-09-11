# overlay fs mount xbps
```bash
$ sudo mount -t overlay overlay -o lowerdir=/opt/xbps-src/void-packages:/opt/xbps-src/ayoub,upperdir=/opt/xbps-src/xbps-up,workdir=/opt/xbps-src/xbps-work /opt/xbps-src/xbps-merg

# mount pkg for void-packages
    - don't use `ln` or `ln -s`
    - use `mount --bind`:
    ```bash
    $ mkdir /path/to/new/dir
    $ mount --bind /path/to/dir /path/to/new/dir
    ```
```
