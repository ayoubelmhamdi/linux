- make.conf
```bash
# These settings were set by the catalyst build script that automatically
# built this stage.
# Please consult /usr/share/portage/config/make.conf.example for a more
# detailed example.
COMMON_FLAGS="-march=native -O2 -pipe"
CFLAGS="${COMMON_FLAGS}"
CXXFLAGS="${COMMON_FLAGS}"
FCFLAGS="${COMMON_FLAGS}"
FFLAGS="${COMMON_FLAGS}"

# NOTE: This stage was built with the bindist Use flag enabled
PORTDIR="/var/db/repos/gentoo"
DISTDIR="/var/cache/distfiles"
PKGDIR="/var/cache/binpkgs"

# This sets the language of build output to English.
# Please keep this setting intact when reporting bugs.
LC_MESSAGES=C
LINGUAS="en en_US"
ACCEPT_LICENSE="*"
MAKEOPTS="-j4"
VIDEO_CARDS="intel i965" 
GRUB_PLATFORMS="efi-86"
CCACHE_SIZE="4G"

AUTOCLEAN="yes"

USE=""
## Fonts
USE="$USE truetype xft"
## Power Management
USE="$USE acpi lm_sensors -upower"

## Negatives...
USE="$USE -gnome -kde"





GENTOO_MIRRORS="http://www.mirrorservice.org/sites/www.ibiblio.org/gentoo/ \
                ftp://ftp.mirrorservice.org/sites/www.ibiblio.org/gentoo/ \
                ftp://gentoo.virginmedia.com/sites/gentoo \
                http://gentoo.virginmedia.com/"

SYNC="rsync://rsync.uk.gentoo.org/gentoo-portage"
```
