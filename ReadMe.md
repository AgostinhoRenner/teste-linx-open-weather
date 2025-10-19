## Teste Open Weather

Objetivo é criar uma API que devolve o retorno da API Open-Weather - [5 days 3 hour forecast](https://openweathermap.org/forecast5).
Com o retorno deve ser feito um frontend que realiza o Parse da informação e transforma em um layout a partir de componentes do React.

Componentes necessários:

- Home bar
- SearchBox - para informar a cidade da qual se deseja a pesquisa de previsão do tempo.
- Cards - Cada card deve receber a informação de um dia da semana e exibir as informações
- Detalhes - Deve receber a informação de um card através de seleção do usuário e exibir os detalhes da informação.

## Tecnologias utilizadas

### Backend

- Flask Python - utilizada para montar o servidor de API e rotas.
- Flask Cors - para o cors.
- Python-Dotenv - para controle de variáveis de ambiente em ambiente dev.
- Requests - para realizar a requisição da api do Open-Weather.

### Frontend

- Vite - Para o scafolding do repositório react e environment.
- React TS - Utilizado para montagem dos componentes.
- React-Redux - Utilizado para gestão de estados as informações necessárias.
- React-hook-form - Validação de input
- Axios - Utilizado para fazer as requisições para o Backend.

## Tecnologias necessárias para instalar e rodar o projeto.

- [Python 3.14](https://www.python.org/ftp/python/3.14.0/python-3.14.0-amd64.exe)
- [Nodejs lts](https://nodejs.org/en/download)

## Como instalar e rodar os projetos

Após realizar o download do repositório e acessar ele via VsCode.

Na pasta "backend" crie o arquivo .env `cd backend`:

1. Adicione OPEN_WEATHER_BASE_URL="https://api.openweathermap.org/data/2.5/forecast"
2. OPEN_WEATHER_API_KEY="sua_app_id"
3. Abra o terminal e crie o ambiente virtual python `python -m venv .venv`
4. Ative o ambiente virtual: `./.venv/Scripts/Activate.ps1`
5. Rode a instalação das dependências: `pip install -r requirements.txt`
6. Rode o comando `flask --app flaskr run`
7. Copie o url http fornecido e coloque na variável de ambiente criada no passo 1 do frontend.

Na pasta "frontend" crie o arquivo .env:

1. adicione VITE_API_URL= "url_servidor_backend"
2. VITE_ICON_URL = "https://openweathermap.org/img/wn/"
3. Rode o comando de instalação das dependências: `npm install`
4. Rode o comando de compilação: `npm run build`
5. Rode o comando de preview: `npm run preview`
