"""
Lucas (LTW) Tom-Wong, Julia (Lia) Nelson
SoftDev
K19 -- Restful API
2021-10-23
"""
from flask import Flask, render_template, request
import json

app = Flask(__name__)

def display_Info(storage):
    explanation = storage(explanation)
    url = storage.value(url)
    return render_template("main.html", explanation, url)

@app.route("/")
def main():
    nasa = request()
    library_of_info = json.loads(nasa)
    display_Info(library_of_info)
    print(library_of_info)

if __name__ == "__main__":
    """
    false if this file imported as module
    debugging enabled
    """
    app.debug = True
    app.run()
