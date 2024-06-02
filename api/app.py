import os
import urllib3
import shutil
from flask import Flask, render_template, send_from_directory, jsonify

app = Flask(__name__)

app.config['SECRET_KEY'] = os.urandom(12).hex()
http = urllib3.PoolManager()


@app.route('/')
def index():
    return render_template('index.html', DEBUG=False)


@app.route('/resume')
def resume():
    # try:
    #     os.remove(os.path.join(app.root_path, 'resume.pdf'))
    # except:
    #     pass
    # with http.request('GET', "https://cloud.midhat.io/s/resume/download/resume.pdf", preload_content=False) as resp, open("resume.pdf", 'wb') as out_file:
    #     shutil.copyfileobj(resp, out_file)
    return send_from_directory(app.root_path, 'resume.pdf')


@app.route("/api")
def api():
    returnv = {
        "Hello World": 200
    }
    return jsonify(returnv)


@app.route("/api/mkt_ver")
def mouseketools_version():
    version = {
        "version": "1.1"
    }
    return jsonify(version)
