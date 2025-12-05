from flask import Flask, render_template

# Inicializando o Flask
app = Flask(__name__)

# Rotas principais
@app.route('/')
def capa():
    return render_template('capa.html')

@app.route('/cadastro')
def cadastro():
    return render_template('cadastro.html')

@app.route('/usuario_create')
def usuario_create():
    return render_template('usuario_create.html')

@app.route('/suporte_create')
def suporte_create():
    return render_template('suporte_create.html')

@app.route('/perfil')
def perfil():
    return render_template('perfil.html')

@app.route('/alteracao de dados')
def alteracaodedados():
    return render_template('alteracao de dados.html')

if __name__ == '__main__':
    app.run(debug=True)