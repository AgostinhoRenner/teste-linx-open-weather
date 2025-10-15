
from ..services.open_weather_service import open_weather_service

from flask import (Blueprint, request)

bp = Blueprint('weather', __name__, url_prefix='/weather')

@bp.route('/', methods=(['POST']))
def consulta_clima_cidade():
    data = request.get_json()
    return open_weather_service.consulta_clima_cidade('Blumenau')