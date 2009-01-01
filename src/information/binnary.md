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
