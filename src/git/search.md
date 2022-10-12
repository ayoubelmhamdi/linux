### find/search for string in commits in git
```bash
git rev-list --all | xargs git grep "string"
```

### deleted file
Find by:
```bash
git log --diff-filter=D --summary file
```

Restore by:
```bash
git checkout dc5599 -- file
```
