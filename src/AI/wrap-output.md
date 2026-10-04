# Run bunch of commands and wrap own outputs.

```bash
#!/bin/bash

log_file="${1:-}"

if [ -n "$log_file" ];then
    output_file="$log_file"
else
    output_file="$(mktemp)"
fi

cat /dev/null > "$output_file"

trap_fn(){
    if [ -n "$log_file" ];then
        cat "$output_file" > "$log_file"
        rm $output_file
    else
        cat "$output_file" 
    fi
}
trap 'trap_fn' INT EXIT


run() {
    printf '$ %s\n' "$*" | tee -a "$output_file"
    "$@" >>"$output_file" 2>&1
    printf '\n' | tee -a "$output_file"
}

# run ls -al
# run grep 'pattern' /path/
```
