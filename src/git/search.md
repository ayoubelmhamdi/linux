# find/search for string in commits in git
```bash
$ git rev-list --all | GIT_PAGER=cat xargs git grep "string"
```
