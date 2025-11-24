from flask import Flask, render_template

# Inicializando o Flask
app = Flask(__name__)

# Rotas principais
@app.route('/')
def capa():
    return render_template('capa.html')


if __name__ == '__main__':
    app.run(debug=True)