# install all pkg from file
-------------------------

```bash
pacman -Syy $(cat pacman.txt | sed '/^#/d' | tr '\n' ' ')
```

### create user
```bash
# TODO
```

### set time
```bash
# TODO
```

### networking
```bash
# TODO
```

### search for some files offline fro any pkgs
```bash
pkgfile --update
```
