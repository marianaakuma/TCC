from flask import Flask, render_template

# Inicializando o Flask
app = Flask(__name__)

# Rotas principais
@app.route('/')
def capa():
    return render_template('capa.html')

@app.route('/usuario_create')
def usuario_create():
    return render_template('usuario_create.html')

if __name__ == '__main__':
    app.run(debug=True)