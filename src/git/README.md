# Git

root from absolute path
-------------------------
```bash
git rev-parse --show-toplevel
```

- HOW view diff version of one file in two branch  

the `mybranch` is new than master:
  `git diff old..new`
  should be write `master..mybranch` will be add `+` after any `new line` created by `mybranch` 
```bash
(master) $ cat file.txt 
a
c

(mybranch) $ cat file.txt 
a
b
c
```
```bash
git diff master..mybranch -- /file1
```
```diff
 a
+b
 c
```

- view `diff` bitween to dirs
```bash
$ diff -rq ./dir1 ./dir2
```

- git `back/reset/restor/revet` 
```bash
$ git reset --hard 6bc2e3a
```

- diff new `file` only:
```bash
git diff --name-only  --diff-filter=A 65833e30..c3098905
```

- submodule
```
git clone --recurse-submodules -j8 git://github.com/foo/bar.git
git submodule update --init --recursive
```
