# Gdrive

- [go fork1](https://github.com/carstentrink/gdrive)

```bash
git clone --depth=1 https://github.com/carstentrink/gdrive
cd gdrive
# edit ./handlers_drive.go
# change cliend id and secrete_code
go install
```
- [go fork2](https://github.com/msfjarvis/gdrive)
```bash
go install github.com/msfjarvis/gdrive@latest
```
### Active
```bash
# any command like
gdrive list
```
if you login with multi `emails`, should disconnected or use `private-browser`

### download
to download this link
```
https://drive.google.com/u/1/uc?id=1z7RhJgZDDONsrv2mSoHxlkN3XBcvGc5T&export=download
```
use
```
gdrive download 1z7RhJgZDDONsrv2mSoHxlkN3XBcvGc5T
```
