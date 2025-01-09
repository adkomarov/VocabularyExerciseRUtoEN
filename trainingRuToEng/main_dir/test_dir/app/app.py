from flask import Flask, jsonify, send_from_directory, render_template
import os
app = Flask(__name__)

# Путь к директории static
VOCABULARY_PATH = os.path.join(app.static_folder, 'vocabulary_set')

@app.route('/vocabulary_set/')
def list_vocabulary_files():
    try:
        # Получение списка файлов, начинающихся на "set" и заканчивающихся на ".json"
        files = [f for f in os.listdir(VOCABULARY_PATH) if f.startswith('set') and f.endswith('.json')]
        return jsonify(files)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/vocabulary_set/<filename>')
def serve_vocabulary_file(filename):
    try:
        # Отправка конкретного JSON-файла
        return send_from_directory(VOCABULARY_PATH, filename)
    except Exception as e:
        return jsonify({"error": str(e)}), 404


@app.route('/')
def index():
    # Отдаем index.html из папки templates
    return render_template('index.html')

if __name__ == '__main__':
    # Запуск приложения на localhost:5000
    app.run(debug=True)