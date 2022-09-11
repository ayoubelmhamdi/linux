# fix apt
----------
- add non signed repository to apt
```bash
deb [trusted=yes] http://xxxxxx yyy main
```
- fix _apt root
```bash
alias apt='apt-o APT::Sandbox::User=root'
```
