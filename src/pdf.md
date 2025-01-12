# Decrypt pdf
### wak pdf decryption:
it's not need any password, just run.

```consol
# xbps-install -Sy qpdf
qpdf --decrypt ../input.pdf out.pd
```
if we have passord

```consol
qpdf --decrypt ../input.pdf out.pdf --password=1234
```
