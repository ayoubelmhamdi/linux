# Configuring NeoMutt with Gmail OAuth2 using mutt-wizard

This guide will walk you through setting up NeoMutt with Gmail using OAuth2 authentication via mutt-wizard.

## Prerequisites

First, install the necessary dependencies:

```
sudo xbps-install -Sy cyrus-sasl-xoauth2 neomutt curl isync msmtp pass pam-gnupg notmuch abook urlview mpop
```

## Installation

1. Clone and install mutt-wizard:

```
git clone https://github.com/lukesmithxyz/mutt-wizard
cd mutt-wizard
sudo make install
```

2. Generate a GPG key:

```
gpg --full-generate-key
```

3. Initialize pass with your email:

```
pass init ayoub@gmail.com
```

## Configuration

1. Run mutt-wizard to add your Gmail account:

```
mw -a ayoub@gmail.com
```

2. Generate an app password for Gmail:
   - Visit [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Generate a new password for your email client

3. When prompted by mutt-wizard, enter the generated app password:
you will see a key like this:
```
vJkl jtjk weqc rwzi
```

## Troubleshooting

If you enter an incorrect password, you may need to remove the stored password:

```
rm /home/$USER/.password-store -rf
```

Then, re-run the mutt-wizard configuration process.
