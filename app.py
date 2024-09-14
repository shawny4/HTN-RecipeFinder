import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

EDAMAM_APP_ID = os.getenv("EDAMAM_APP_ID")
EDAMAM_APP_KEY = os.getenv("EDAMAM_APP_KEY")

BASE_URL = "https://api.edamam.com/search"


@app.route("/api/recipes", methods=["GET"])
def get_recipes():
    # Get the query parameter from the request
    query = request.args.get("query")

    if not query:
        return jsonify({"error": "Please provide a search query"}), 400

    # Parameters for the API request
    params = {
        "q": query,
        "app_id": EDAMAM_APP_ID,
        "app_key": EDAMAM_APP_KEY,
        "from": 0,
        "to": 10,  # Limit to 10 results
    }

    try:
        # Make the API request
        response = requests.get(BASE_URL, params=params)
        response.raise_for_status()  # Raise error for bad status codes

        # Get JSON response and extract recipe data
        data = response.json()
        recipes = data.get("hits", [])

        return jsonify(recipes), 200
    except requests.exceptions.RequestException as e:
        # Handle errors
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
