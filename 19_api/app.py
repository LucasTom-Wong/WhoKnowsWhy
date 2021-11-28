# Orange: Lucas (LTW) Tom-Wong, Julia (Lia) Nelson
# SoftDev
# K19 -- Restful API
# 2021-10-23

from flask import Flask, render_template
import json
import urllib

app = Flask(__name__)

def display_Info(ssstorage):
    explanation = ssstorage['explanation']
    url = ssstorage['url']
    return render_template("main.html", explanation, url)

@app.route("/")
def main():
    url = "https://api.nasa.gov/planetary/apod?api_key="
    url += str(open("key_nasa.txt", "r").read())
    nasa = urllib.request.urlopen(url)
    library_of_info = json.loads(nasa.read())
    display_Info(library_of_info)
    # print(library_of_info)

if __name__ == "__main__":
    # false if this file imported as module
    # debugging enabled
    app.debug = True
    app.run()
