# USE NON-COMPATIBLE BINARRY
sometimes, I can find some apps in my distrubution, or I want a version that new or old, that I can get in my distrubution, and I can build it from scractch(probably need new/old gcc/clang or property),

### use `ld-linux.so`
The `ld-linux.so` could search for `shared` and `static` libs (binnary libs, created by gcc/clang).
The `ld-linux.so` will `execute` apps, when resolve the `libs`.

To run `aircrack-ng`, I should have some `libs` in my system, I could use the `libs` from `wifislax` too.
Here, I have multi `libs` of linux `wifislax` in current directory.
```bash
LD_LIBRARY_PATH=$PWD/lib:$PWD/usr/lib ./ld-linux.so.2 ./aircrack-ng --help
```

### Complex apps
for exemple, when apps wrap by bash scripts, like:
```bash
#!/bin/bash

aircrack-ng --help
```
the `ld-linux.so` cannot launch this script, to resorve this probleme:
  - recreate bash script
  - use `export LD_LIBRARY_PATH`

### `ls-linux.so` problems
When useing `export`, how to tell linux what `lib-linux.so` should use, `lib-linux.so.2` or `lib-linux.so3` or `$PWD/lib/ld-linux.so.2`…

### XDG Path Overrides

`/usr/share` is related to `XDG_DATA_DIRS` directly. We can use another location as a replacement for `/usr/share` by exporting it:

```bash
export XDG_DATA_DIRS=/tmp/new_2/usr/share:/usr/local/share:/usr/share
```

This is very useful for testing packages from other Linux distros after extracting/decompressing them, without needing root or installing anything system-wide.


### Python Path Overrides
For the Python environment, use `PYTHONPATH`:

```bash
export PYTHONPATH=/tmp/new_2/usr/lib/python3.14/site-packages
```

> ⚠️ Avoid a leading `:` in `PYTHONPATH` (e.g. `=:/tmp/...`) — it adds the current directory as a search path, which can cause unexpected import errors.
