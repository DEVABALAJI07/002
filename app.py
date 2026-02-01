from flask import Flask, render_template, request, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/track-click", methods=["POST"])
def track_click():
    data = request.get_json()
    action = data.get("action")
    time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with open("clicks.log", "a") as file:
        file.write(f"{time} - {action}\n")

    return jsonify({"status": "ok"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
