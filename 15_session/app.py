"""
The Onions - Ishraq Mahid, Lucas Tom-Wong (LTW), Tomas Acuna
SoftDev
K15 -- Sessions Greetings -- Login and Cookies
2021-10-18
"""

"""
LTW - changes 23:13 10/19/2021
Added additional comments
removed line 24, "debug = True", seemed redundant since below there was "app.debug = True"
removed welcome.html and incoporated it into response.html
 as well as changed code in app.py from welcome to response
Created a Go_Back button for FailedLogin.html
once we finish, we can comment out the if debug code as it is only needed if we are debugging and console messages are annoying
login.html has not been altered
"""

from flask import Flask, render_template, request
from flask import session
#from config import KEY
#imports modules used

app = Flask(__name__)  # create Flask object

#app.secret_key = KEY #creates a key which is equal to theh key from a config file on your pc


@app.route("/", methods=['GET', 'POST'])
def disp_loginpage():
    """
    renders the login page or home page, depending on user login status
    """
    if debug:
        print(request.method)
    try:
        #The only thing that sends a POST request, piping it into here, is the logout button
        if request.method == "POST":
            #Sets 'user' key to None to signal no user logged in
            session['user'] = None
            return render_template('login.html')

        #Everything else is a GET req essentially
        elif request.method == "GET":
            if debug:
                print(session['user'])

            #Checks to see if user exists -> logs them in if it does
            if session['user']:
                return render_template('response.html', username = session['user'], method = request.method)

            #returns login template otherwise
            return render_template('login.html')

    except:
        #in scenario of bad juju, simply has user try to login
        return render_template('login.html')


@app.route("/auth_ed", methods=['GET', 'POST'])
def authenticate():
    """
    renders auth flow template and responds to user login
    """
    #try catch and responsive failedlogin template depending on failure type
    try:
        if debug:
            print(request.method)

        #only req type for this page is GET (although maybe not accurate of what is going on?)
        if request.method == "GET":

            user = request.args.get('username')
            password = request.args.get('password')

            if debug:
                print("Username and Password HERE:")
                print(user)
                print(password)

            #Hardcoded user and password
            if(user == "Mr.Mykolyk" and password == "251"):
                session['user'] = user
                #renders template using credentials
                return render_template('response.html', username = session['user'], method = request.method)

            return render_template("FailedLogin.html", error = "an incorrect password or username")
    except:
        return render_template("FailedLogin.html", error = "bad juju")

    #print("This is the USERNAME AND PASSWORD")
    #still prints None, alt
    #print(user)
    #print(password)

        #brings up the response.html page with username and the method request sent to the page
    #uses responses from previous inputs/method


if __name__ == "__main__":
    """
    false if this file imported as module
    debugging enabled
    """
    app.debug = True
    app.run()
