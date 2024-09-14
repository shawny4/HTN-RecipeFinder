import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello World!"


ID = "1e3d80df"
KEY = "a5dc1f0f05d4100186953180b1c1bc3a"
URL = "https://api.edamam.com/api/recipes/v2"


@app.route("/recipe", methods=["GET"])
def search():
    query = request.args.get("q")
    if not query:
        return jsonify({"error": "No query provided"}), 400
    params = {
        "type": "public",
        "q": query,
        "app_id": ID,
        "app_key": KEY,
    }

    try:
        response = requests.get(URL, params=params)

        if response.status_code == 200:
            data = response.json()
            return jsonify(data)
        else:
            return jsonify({"error"}), response.status_code
    except Exception as e:
        return jsonify({"error": str(e)}), response.status_code


# Example request
def example_request():
    params = {
        "q": "pasta",
        "type": "public",  # or "private" depending on your needs
        "app_id": ID,
        "app_key": KEY,
        "from": 0,
        "to": 10,  # Limit to 10 results
    }

    try:
        response = requests.get(URL, params=params)
        response.raise_for_status()  # Raise error for bad status codes

        # Print the response JSON
        print(response.json())
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")


if __name__ == "__main__":
    latest_recipe_data = example_request()
    print(latest_recipe_data)
    app.run(debug=True)
