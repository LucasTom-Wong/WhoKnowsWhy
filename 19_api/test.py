import json
import urllib.request

def main():
    nasa = urllib.request.urlopen("https://api.nasa.gov/planetary/apod?api_key=BbBUhlazreBfN6DQvmGnAp6TcuBzsfUQJISPj1hK")
    library_of_info = json.loads(nasa.read())
    print(library_of_info)
    # print(library_of_info)

if __name__ == "__main__":
    """
    false if this file imported as module
    debugging enabled
    """
    # app.debug = True
    main()
