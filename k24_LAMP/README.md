# how-to :: CREATE A DIGITAL OCEAN DROPLET WITH UBUNTU AND APACHE
---
## Overview
Guide to creating an ubuntu 20.04 virtual machine ("droplet") and installing Apache2 web server on it.

### Estimated Time Cost: A bit

### Prerequisites:

- A droplet

### Resources
* https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-20-04
* https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-18-04-quickstart
* https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04#step-2-%E2%80%94-copying-the-public-key-to-your-ubuntu-server
* https://www.digitalocean.com/community/tutorials/how-to-install-and-use-sqlite-on-ubuntu-20-04
* https://bobcares.com/blog/digitalocean-disable-root-login/

---

### Steps

#### Setting up LAMP stack
 
 SSH into droplet <br>
`$ ssh root@ip-address`

 Updates apt which is similar to pip but is for linux <br>
`$ sudo apt update`
 
 Apache <br>
`$ sudo apt install apache2`
 
 Sqlite <br>
`$ sudo apt install sqlite3`
 
 Python <br>
`$ sudo apt install python3`
  
 Reload droplet <br>
 `$sudo service apache2 restart `
 
#### Creating user
 
 SSH into droplet <br>
`$ ssh root@your_server_ip_address`

 Creates a new user <br>
`$ adduser name`

 Gives user "name" sudo perms (what root has but for a user) <br>
`$ usermod -aG sudo name`

 Switch user <br>
`$ su name`

 Note: you can test if your user works with the following line <br>
`$ sudo ls -la /root`

#### Removing root user
 SSH into droplet <br>
`$ ssh name@ip-address`
 
 Modify sshd_config file <br>
 `$ sudo nano /etc/ssh/sshd_config`
 
 Change PermitRootLogin from to no
 Change PubkeyAuthentication to yes
 Change ChallengeResponseAuthentication to no
 Change UsePAM to yes
 
 Note: you will probably want to remove password-based authentication, you can do this now.
 Change PasswordAuthentication from yes to no

 Reload droplet <br>
 `$sudo service apache2 restart `

#### Adding new ssh key
 Note: you will need password-based authentication enabled so from a device with a ssh key already existing
 Change PasswordAuthentication to yes
 This will allow you to access the droplet from a new device
  
 Note: This is assuming you already have a public ssh key on your device, such as one you use for github.
 
  Copy SSH Key <br>
 `$ssh-copy-id name@ip-address`
  
  Note: you will want to say yes to recognizing the new fingerprint
  
  Enter password
  
  ORRRRRRRR
  
  Copy your ssh key from your device with <br>
  `$cat ~/.ssh/id_rsa.pub`
  
  Paste it into your droplet <br>
  
  * SSH into droplet <br>
  `$ ssh name@ip-address`
  
  * Paste it into authorized_keys <br>
  `$sudo nano ~/.ssh/authorized_keys`
  
  Note: once you do this you can test it by logging in again and removing password-based authentication
  
  Reload droplet <br>
 `$sudo service apache2 restart `
 
---

Accurate as of (last update): 2022-01-24

#### Contributors:  
Julia Nelson, pd1 <br>
Lucas Tom-Wong, pd1
