from flask import Flask, render_template, redirect
import datetime
app = Flask(__name__)

@app.route('/')
def index():
    year = datetime.datetime.now().year
    return render_template('index.html', year=year)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == "__main__":
    app.run(debug=True)

