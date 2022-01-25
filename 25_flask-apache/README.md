# how-to :: DEPLOY A FLASK APP ON YOUR DROPLET USING APACHE
---
## Overview
Guide to deploying a flask app on your droplet with apache.

### Estimated Time Cost: A bit

### Prerequisites:

- A droplet
- LAMP stack

---

### Setting up flask

#### Instal wsgi
Install wsgi <br>
`$ sudo apt-get install libapache2-mod-wsgi-py3 python-dev`

#### Creating directories and python files
Change directories <br>
`$ cd /var/www`

Create directory for app <br>
`$ sudo mkdir App_Name`

Inside of that directory, either clone your github repo or make another folder to have your app <br>
`$ sudo mkdir App_Name`<br>
`$ sudo git clone githubrepo_ssh`

Note: If your app should be called __init__.py <br>
`$ sudo nano __init__.py`<br>
Note: If you exit from nano and want to resume, you can use `%`

Note: You can also make the make a secure copy a file with the following command <br>
Note: You will need to be outside your droplet (ctrl-d) <br>
`$ scp -r App_Name/ user@droplet_ip:/var/www/App_Name`

Make files editable <br>
`$ sudo chown -R $user:$user App_Name/` <br>  `$ sudo chmod -R 755 App_Name/`

Enable wsgi <br>
`$ sudo a2enmod wsgi`

In the directory with your app (innermost with App_Name), you need a static and template diretory <br>
Can create with : `$sudo mkdir static templates`

#### Creating virtual environment and instlaling flask

Install pip <br>
`$ sudo apt-get install python3-pip`

Install Virtual Environment <br>
`$ sudo pip3 install virtualenv`

Create Virtual Environment <br>
`$ sudo virtualenv venv`

Activate Virtual Environment <br>
`$ source venv/bin/activate`

Install flask in the Virtual Environment <br>
`$ sudo pip3 install Flask`

Note: You will want to deactivate the virtual environemnt <br>
Can be done with `$ sudo deactivate`

### Config files for app

Modify/Add Config file for you flask app virtual host <br>
`$ sudo nano /etc/apache2/sites-available/App_Name.conf`

Paste following lines in <br>
```
   <VirtualHost *:80>
		ServerName mywebsite.com
		ServerAdmin admin@mywebsite.com
		WSGIScriptAlias / /var/www/App_Name/app_name.wsgi
		<Directory /var/www/App_Name/App_Name/>
			Order allow,deny
			Allow from all
		</Directory>
		Alias /static /var/www/App_Name/App_Name/static
		<Directory /var/www/App_Name/App_Name/static/>
			Order allow,deny
			Allow from all
		</Directory>
		ErrorLog ${APACHE_LOG_DIR}/error.log
		LogLevel warn
		CustomLog ${APACHE_LOG_DIR}/access.log combined
   </VirtualHost>
   ```
Note: You want to replace ServerName and ServerAdmin with your ip address or your user@ip_address <br>

Enable virtual host <br>
`$ sudo a2ensite FlaskApp`

Reload <br>
`$ sudo service apache2 restart`

### wsgi file

In the /var/www/App_Name (Not the innermost, outer one) <br>
Create a wsgi file <br>
`$ sudo nano flaskapp.wsgi`

Paste following <br>
```
  #!/usr/bin/python
  import sys
  import logging
  logging.basicConfig(stream=sys.stderr)
  sys.path.insert(0,"/var/www/App_Name")

  from FlaskApp import app as application
  application.secret_key = 'Add your secret key'
```

Reload <br>
`$ sudo service apache2 restart `

### Enabling and disabling

Virtual host for your app can be enabled with <br>
`$ sudo a2ensite App_Name`

And can be disabled with <br>
`$ sudo a2dissite App_Name`
