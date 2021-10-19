"""
Ishraq Mahid, Lucas Tom-Wong (LTW), Tomas Acuna
SoftDev
K15 -- Sessions Greetings -- Login and Cookies
2021-10-18
"""
from flask import Flask
from flask import render_template
from flask import request
app = Flask(__name__)

@app.route("/")
def display_login():
    return render_template( 'login.html' )

@app.route("/auth_ed")
def display_logged_in():
    return render_template('response.html', username = request.args['username'], method = request.method)

if __name__ == "__main__": #false if this file imported as module
    app.debug = True
    app.run()
