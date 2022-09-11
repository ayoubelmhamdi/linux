# Linux
- [CLI](./cli/index.html)
- [FIX](./fix/index.html)
- [SETTING](./setting/index.html)
- [INFORMATION](./information/index.html)



### install module pf perl
```bash
export PERL5LIB="$HOME/.cpan/build:$PERL5LIB"
cpan YAML/Tiny.pm
```

### ckeck process if runin
```bash
$ pgrep nvim
$ ps -C nginx
$ ps aux | grep "nvim" | awk ' $11 == "nvim" {print $11}'
```

- conddtion
```bash
if pgrep -x "gedit" > /dev/null
then
    echo "Running"
else
    echo "Stopped"
fi
```
### calcule: sha hash
```bash
$ xbps-install -Sy coreutils
$ sha1sum
$ sha256sum
```

### fix greedy
```bash
perl -pe 's#a.*?a#--#'
```
