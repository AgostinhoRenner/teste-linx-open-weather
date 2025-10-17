
from ..services.open_weather_service import open_weather_service

from flask import Blueprint, request, abort

bp = Blueprint("weather", __name__, url_prefix="/weather")


@bp.route("", methods=(["POST"]))
def consulta_clima_cidade():
    try:
        data = request.get_json()
        return open_weather_service.consulta_clima_cidade(data["cidade"])
    except Exception as e:
        print(e) ## Substituível por um registro em log
        abort(500, description="Erro Interno do Servidor")


@bp.route("/historico", methods=(["POST"]))
def consulta_clima_historico():
    abort(500, description="Não implementado")
