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

---

### Steps

#### Setting up LAMP stack

$ ssh root@ip-address

$ sudo apt update

$ sudo apt install apache2

$ sudo apt install sqlite3

$ sudo apt install python3

#### Creating user

$ ssh root@your_server_ip_address

$ adduser name

$ usermod -aG sudo name

$ su name

* Note: you can test if your user works with the following line
$ sudo ls -la /root

#### Removing root user



Accurate as of (last update): 2022-01-24

#### Contributors:  
Julia Nelson, pd1
Lucas Tom-Wong, pd1
