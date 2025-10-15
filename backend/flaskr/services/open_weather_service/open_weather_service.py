import requests
import os


def consulta_clima_cidade(cidade: str):
    base_url = os.environ['OPEN_WEATHER_BASE_URL']
    url_query = f"?q={cidade}"
    appid = f"&appid={os.environ['OPEN_WEATHER_API_KEY']}"

    url = base_url + url_query + appid

    try:
        response = requests.get(url)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")

    return response.json()
