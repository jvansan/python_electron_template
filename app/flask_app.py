import sys
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "<h1>Hello World from Flask!</h1>"

if __name__ == "__main__":
    app.run(port=55556)
