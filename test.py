from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello World!'

ID  = '1e3d80df'
KEY = 'a5dc1f0f05d4100186953180b1c1bc3a'
URL = 'https://api.edamam.com/api/recipes/v2'
label = 'None'

@app.route('/recipe', methods=['GET'])
def search():
    query = request.args.get('q')
    if not query:
        return jsonify({'error': 'No query provided'}), 400
    params = {
        'type': 'public',
        'q': query,
        'app_id': ID,
        'app_key': KEY,
    }

    try:
        response = requests.get(URL, params=params)
        label = 'None'
        url = 'None'
        image = 'None'
        if response.status_code == 200:
            data = response.json()
            print(data['hits'][0]['recipe'])
            if 'label' in data['hits'][0]['recipe']:
                label = str(data['hits'][0]['recipe']['label'])
            if 'url' in data['hits'][0]['recipe']:
                url = str(data['hits'][0]['recipe']['url'])
            if 'image' in data['hits'][0]['recipe']:
                image = str(data['hits'][0]['recipe']['image'])
            printout = [label, url, image]
            return printout


        else:
            return jsonify({"error":"Bitch"}), response.status_code
    except Exception as e:
        return jsonify({"error":str(e)}), response.status_code



if __name__ == '__main__':
    app.run(debug=True)
