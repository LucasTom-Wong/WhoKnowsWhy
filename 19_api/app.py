"""
Orange: Lucas (LTW) Tom-Wong, Julia (Lia) Nelson
SoftDev
K19 -- Restful API
2021-10-23
"""
from flask import Flask, render_template, request
import json
import urllib.request

app = Flask(__name__)

def display_Info(ssstorage):
    explanation = ssstorage.data[explanation]
    url = ssstorage.data[url]
    return render_template("main.html", explanation, url)

@app.route("/")
def main():
    nasa = urllib.request.urlopen("https://api.nasa.gov/planetary/apod?api_key=BbBUhlazreBfN6DQvmGnAp6TcuBzsfUQJISPj1hK")
    library_of_info = json.loads(nasa.read())
    display_Info(library_of_info)
    # print(library_of_info)

if __name__ == "__main__":
    """
    false if this file imported as module
    debugging enabled
    """
    app.debug = True
    app.run()
