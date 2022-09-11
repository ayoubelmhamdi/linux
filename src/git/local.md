
# git locally
  - pc:     `mkdir /path/to/origin && cd $_`
  - remote: `mkdir /path/to/backup && pushd $_ # meen cd to dir2`
  - remote: `git init --bare`
  - pc:     `popd`
  - pc:     `git init`
  - pc:     `git remote add local /path/to/backup`
  - pc:     `touch aa{1..4}.txt`
  - pc:     `git add .`
  - pc:     `git commit -m 'init project'`
  - pc:     `git push -u local maste`
