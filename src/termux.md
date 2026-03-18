# TERMUX:

See (login to phone using ssh)[ssh/README.md]


# AArch64 Linux → Android (Termux) compatibility notes

On Android/Termux, native executables use Bionic, not glibc, and the dynamic linker is typically `/system/bin/linker64`. Termux’s execution environment is different enough that patching a glibc binary to use Android’s linker is usually not sufficient.

if we want to download a binnary we should check `*-aarch64-unknown-linux-musl` and maybe not work.

## inspect

```bash
file ./bin
readelf -hW ./bin | grep Type:
readelf -lW ./bin | grep INTERP
readelf -dW ./bin | grep NEEDED
````

## key rule
if we ckeck a musl binary `./bin` and we get:

```bash
ARM64 + static + ET_EXEC + no INTERP
```

Native Android wants:

```bash
ARM64 + PIE (ET_DYN) + Android/bionic-compatible build
```


## decision

| case                | status                |
| ------------------- | --------------------- |
| ET_DYN + INTERP     | patchable             |
| ET_DYN (static PIE) | likely OK             |
| ET_EXEC (static)    | ❌ no fix if not musl |
| ET_EXEC (dynamic)   | ❌ no fix             |
| glibc-linked        | ❌ incompatible       |

## patch (dynamic PIE only)

set Android linker:

```bash
patchelf --set-interpreter /system/bin/linker64 ./bin
patchelf --set-rpath '$PREFIX/lib' ./bin
```


## quick reality

* `static + EXEC` → no path forward
* `glibc` → wrong libc (Android = bionic)
* `no INTERP` → nothing to patch

This is ABI, not paths.

```
ET_EXEC → dead
ET_DYN  → maybe works
```

* `patchelf` only works for dynamic PIE binaries
