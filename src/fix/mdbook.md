# Syntax Highlight

[issue](https://github.com/rust-lang/mdBook/issues/1459)

From [highlightjs.org/download](https://highlightjs.org/download/), I specified only few **languages**, to download them

![image](https://user-images.githubusercontent.com/34358145/197431856-6e785f9b-6165-4b76-8eb5-7e572148391d.png)


I got this zip

![image](https://user-images.githubusercontent.com/34358145/197432280-72df9430-21d9-4531-8641-7a3d620371aa.png)

I have chosen `highlight.min.js`, by:
```
cp ~/Download/highlight.min.js ~/mybook/theme/highlight.js
```
```
├── book.toml
├── src
│   ├── chapter_1.md
│   └── SUMMARY.md
└── theme
    ├── highlight.css
    └── highlight.js
```

# MISSING

`highlight.css` can't load from original [highlightjs](https://github.com/highlightjs/highlight.js/tree/84719c17a51d7bb045f2df441b9c00f871f7c063/src/styles) repo automatic

```
wget https://github.com/highlightjs/highlight.js/blob/84719c17a51d7bb045f2df441b9c00f871f7c063/src/styles/base16/github.css \
 -O ~/mybook/theme/highlight.css
```

but I can load it manually with some `extension` like [stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en)

## OR
add to `book.toml`
```toml
[output.html]
additional-css = ["./theme/highlight.css"]
```

with some modification in `theme/highlight.css`
```diff
.hljs {
+  display: block;
+  overflow-x: auto;
   color: #adbac7;
-  background: #22272e;
}
```
