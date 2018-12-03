from flask import Flask, render_template, redirect
import datetime
app = Flask(__name__)

year = datetime.datetime.now().year

@app.route('/')
def index():
    return render_template('index.html', year=year)

@app.route('/about')
def about():
    return render_template('about.html', year=year)

@app.route('/projects')
def projects():
    return render_template('projects.html', year=year)

@app.route('/contact')
def contact():
    return render_template('contact.html', year=year)

if __name__ == "__main__":
    app.run(debug=True)

