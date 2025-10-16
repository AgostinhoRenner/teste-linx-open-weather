from datetime import datetime
from flask import jsonify
import requests
import os

def consulta_clima_cidade(cidade: str):
    base_url = os.environ["OPEN_WEATHER_BASE_URL"]
    url_query = f"?q={cidade}"
    appid = f"&appid={os.environ['OPEN_WEATHER_API_KEY']}"

    url = base_url + url_query + appid
    print(url)

    try:
        response = requests.get(url)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(e)  # aqui faria o registro de log em um sistema completo
        return "Cidade informada não encontrada."

    dados_clima = response.json()
    dados_clima['list'] = get_clima_por_data(dados_clima['list'])

    return jsonify(dados_clima)


def get_clima_por_data(lista_datas: tuple) -> list:
    lista_limpa = []
    for item in lista_datas:
        data_afericao = datetime.fromtimestamp(item['dt'])
        if data_afericao.hour >= 21:
            lista_limpa.append(item)
    return lista_limpa
