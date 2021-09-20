from flask import (Flask, flash, render_template, redirect, url_for)

random_garbage = Flask(__name__)

@random_garbage.route("/")
def functionThing():
    return render_template('index.html')