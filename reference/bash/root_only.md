prompts a user to input sudo password

# Make sure only root can run this script

```bash
if [ "$(id -u)" != "0" ]; then
   exec sudo "$0" "$@" 
fi
```
