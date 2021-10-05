"""
Lucas Lee (Lewis Cass), Zhaoyu Lin, Lucas Tom Wong (LTW)
SoftDev
k10 -- Futher Thoughts on Flask App Varations
2021-10-05
"""

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()

"""
Predictionss
- Very similar to v3, printing two messages to the terminal
    - First will be: "about to print __name__..."
    - Then: "__main__" since the program is being called directly
- Serves a webpage on localhost port 5000
- Webpage will display "No hablo queso!" when on the "/" root page
- Debug mode will be listed as "on"
    - Maybe some extra information will be printed to the terminal
    - Prints additional
- Change includes if __name__ == "__main__": which means the file won't run if it is imported
    - Therefore you can use hello_world in other programs without risking running the entire thing and possibly ruining route (No clue just guessing)

Notes
- Webpage acts as expected, continues to run indefinitely
- Messages only appear on the terminal after the webpage is loaded
- Warns on being a "development server" and not to actually use for production
- No HTML tags for the message, just a raw string "No hablo queso!"
- Terminal displays HTTP GET Requests every time the page is loaded
- Debug mode allows changes to code to be shown without restarting the server
"""
