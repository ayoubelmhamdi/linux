# HOW TO USE JUPYTER WITH OPEN VSCODE

```console
rm ~/.vscode-oss
code-oss -enable-proposed-api ms-toolsai.jupyter .
```


or add to the `~/.vscode-oss/argv.json`
```json
{
    "enable-proposed-api": ["ms-toolsai.jupyter"]
}
```
