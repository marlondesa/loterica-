import { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState('SP');
  const [city, setCity] = useState('São Paulo');
  const [coords, setCoords] = useState({ lat: -23.55, lon: -46.63 });

  const citiesByState = {
    'SP': {
      name: 'São Paulo',
      cities: {
        'São Paulo': { lat: -23.55, lon: -46.63 },
        'Guarulhos': { lat: -23.46, lon: -46.53 },
        'Campinas': { lat: -22.91, lon: -47.06 },
        'São Bernardo do Campo': { lat: -23.69, lon: -46.56 },
        'Santo André': { lat: -23.66, lon: -46.53 },
        'Osasco': { lat: -23.53, lon: -46.79 },
        'Sorocaba': { lat: -23.50, lon: -47.46 },
        'Ribeirão Preto': { lat: -21.18, lon: -47.81 },
        'Mauá': { lat: -23.67, lon: -46.46 },
        'Diadema': { lat: -23.69, lon: -46.62 },
        'Jundiaí': { lat: -23.19, lon: -46.88 },
        'Carapicuíba': { lat: -23.52, lon: -46.84 },
        'Piracicaba': { lat: -22.73, lon: -47.65 },
        'Bauru': { lat: -22.31, lon: -49.07 },
        'Franca': { lat: -20.54, lon: -47.40 },
        'Guarujá': { lat: -24.01, lon: -46.26 }
      }
    },
    'RJ': {
      name: 'Rio de Janeiro',
      cities: {
        'Rio de Janeiro': { lat: -22.91, lon: -43.17 },
        'São Gonçalo': { lat: -22.83, lon: -43.05 },
        'Duque de Caxias': { lat: -22.79, lon: -43.31 },
        'Nova Iguaçu': { lat: -22.76, lon: -43.45 },
        'Niterói': { lat: -22.88, lon: -43.10 },
        'Campos dos Goytacazes': { lat: -21.75, lon: -41.33 },
        'Petrópolis': { lat: -22.50, lon: -43.18 },
        'Volta Redonda': { lat: -22.52, lon: -44.10 },
        'São João de Meriti': { lat: -22.80, lon: -43.37 }
      }
    },
    'MG': {
      name: 'Minas Gerais',
      cities: {
        'Belo Horizonte': { lat: -19.92, lon: -43.94 },
        'Uberlândia': { lat: -18.92, lon: -48.28 },
        'Contagem': { lat: -19.93, lon: -44.05 },
        'Juiz de Fora': { lat: -21.76, lon: -43.35 },
        'Betim': { lat: -19.97, lon: -44.20 },
        'Uberaba': { lat: -19.75, lon: -47.93 }
      }
    },
    'RS': {
      name: 'Rio Grande do Sul',
      cities: {
        'Porto Alegre': { lat: -30.03, lon: -51.23 },
        'Caxias do Sul': { lat: -29.17, lon: -51.18 },
        'Canoas': { lat: -29.92, lon: -51.18 },
        'Pelotas': { lat: -31.77, lon: -52.34 }
      }
    },
    'PR': {
      name: 'Paraná',
      cities: {
        'Curitiba': { lat: -25.43, lon: -49.27 },
        'Londrina': { lat: -23.31, lon: -51.16 },
        'Maringá': { lat: -23.43, lon: -51.94 },
        'Ponta Grossa': { lat: -25.10, lon: -50.16 },
        'Cascavel': { lat: -24.96, lon: -53.45 }
      }
    },
    'SC': {
      name: 'Santa Catarina',
      cities: {
        'Florianópolis': { lat: -27.60, lon: -48.52 },
        'Joinville': { lat: -26.30, lon: -48.85 },
        'Blumenau': { lat: -26.92, lon: -49.07 }
      }
    },
    'BA': {
      name: 'Bahia',
      cities: {
        'Salvador': { lat: -12.97, lon: -38.51 },
        'Feira de Santana': { lat: -12.27, lon: -38.97 }
      }
    },
    'CE': {
      name: 'Ceará',
      cities: {
        'Fortaleza': { lat: -3.72, lon: -38.54 }
      }
    },
    'PE': {
      name: 'Pernambuco',
      cities: {
        'Recife': { lat: -8.05, lon: -34.88 },
        'Jaboatão dos Guararapes': { lat: -8.11, lon: -35.01 },
        'Paulista': { lat: -7.94, lon: -34.87 }
      }
    },
    'GO': {
      name: 'Goiás',
      cities: {
        'Goiânia': { lat: -16.69, lon: -49.25 },
        'Aparecida de Goiânia': { lat: -16.82, lon: -49.24 }
      }
    },
    'DF': {
      name: 'Distrito Federal',
      cities: {
        'Brasília': { lat: -15.78, lon: -47.93 }
      }
    },
    'AM': {
      name: 'Amazonas',
      cities: {
        'Manaus': { lat: -3.12, lon: -60.02 }
      }
    },
    'PA': {
      name: 'Pará',
      cities: {
        'Belém': { lat: -1.46, lon: -48.50 },
        'Ananindeua': { lat: -1.37, lon: -48.37 },
        'Santarém': { lat: -2.44, lon: -54.71 }
      }
    },
    'MA': {
      name: 'Maranhão',
      cities: {
        'São Luís': { lat: -2.53, lon: -44.30 },
        'Caxias': { lat: -4.86, lon: -43.36 }
      }
    },
    'AL': {
      name: 'Alagoas',
      cities: {
        'Maceió': { lat: -9.67, lon: -35.74 }
      }
    },
    'RN': {
      name: 'Rio Grande do Norte',
      cities: {
        'Natal': { lat: -5.79, lon: -35.21 }
      }
    },
    'PI': {
      name: 'Piauí',
      cities: {
        'Teresina': { lat: -5.09, lon: -42.80 }
      }
    },
    'MS': {
      name: 'Mato Grosso do Sul',
      cities: {
        'Campo Grande': { lat: -20.45, lon: -54.62 }
      }
    },
    'PB': {
      name: 'Paraíba',
      cities: {
        'João Pessoa': { lat: -7.12, lon: -34.86 }
      }
    },
    'SE': {
      name: 'Sergipe',
      cities: {
        'Aracaju': { lat: -10.91, lon: -37.07 }
      }
    },
    'MT': {
      name: 'Mato Grosso',
      cities: {
        'Cuiabá': { lat: -15.60, lon: -56.10 }
      }
    },
    'RO': {
      name: 'Rondônia',
      cities: {
        'Porto Velho': { lat: -8.76, lon: -63.90 }
      }
    },
    'ES': {
      name: 'Espírito Santo',
      cities: {
        'Serra': { lat: -20.13, lon: -40.31 },
        'Vila Velha': { lat: -20.33, lon: -40.29 },
        'Cariacica': { lat: -20.26, lon: -40.42 },
        'Vitória': { lat: -20.32, lon: -40.34 }
      }
    },
    'AP': {
      name: 'Amapá',
      cities: {
        'Macapá': { lat: 0.04, lon: -51.07 }
      }
    },
    'RR': {
      name: 'Roraima',
      cities: {
        'Boa Vista': { lat: 2.82, lon: -60.67 }
      }
    },
    'TO': {
      name: 'Tocantins',
      cities: {
        'Palmas': { lat: -10.25, lon: -48.32 }
      }
    },
    'AC': {
      name: 'Acre',
      cities: {
        'Rio Branco': { lat: -9.97, lon: -67.81 }
      }
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=America%2FSao_Paulo`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Erro ao buscar dados do clima:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [coords]);

  const getWeatherIcon = (code) => {
    if (code <= 3) return '☀️';
    if (code <= 48) return '☁️';
    if (code <= 67) return '🌧️';
    if (code <= 77) return '🌨️';
    return '⛈️';
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    const firstCity = Object.keys(citiesByState[state].cities)[0];
    setCity(firstCity);
    setCoords(citiesByState[state].cities[firstCity]);
    setLoading(true);
  };

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
    setCoords(citiesByState[selectedState].cities[selectedCity]);
    setLoading(true);
  };

  if (loading) return (
    <div className="weather-container">
      <h1>Carregando previsão do tempo...</h1>
    </div>
  );

  return (
    <div className="weather-container">
      <div className="weather-header">
        <h1>🌤️ Clima e Tempo</h1>
        <div className="location-selectors">
          <select 
            value={selectedState} 
            onChange={(e) => handleStateChange(e.target.value)}
            className="state-select"
          >
            {Object.keys(citiesByState).map(stateCode => (
              <option key={stateCode} value={stateCode}>
                {citiesByState[stateCode].name} ({stateCode})
              </option>
            ))}
          </select>
          
          <select 
            value={city} 
            onChange={(e) => handleCityChange(e.target.value)}
            className="city-select"
          >
            {Object.keys(citiesByState[selectedState].cities).map(cityName => (
              <option key={cityName} value={cityName}>{cityName}</option>
            ))}
          </select>
        </div>
      </div>

      {weather && (
        <>
          <div className="current-weather">
            <div className="weather-card main-card">
              <h2>{city}</h2>
              <div className="weather-icon">
                {getWeatherIcon(weather.current.weather_code)}
              </div>
              <div className="temperature">
                {Math.round(weather.current.temperature_2m)}°C
              </div>
              <div className="weather-details">
                <div>💨 {weather.current.wind_speed_10m} km/h</div>
                <div>💧 {weather.current.relative_humidity_2m}%</div>
              </div>
            </div>
          </div>

          <div className="forecast">
            <h3>Próximos 7 dias</h3>
            <div className="forecast-grid">
              {weather.daily.time.slice(0, 7).map((date, index) => (
                <div key={date} className="forecast-card">
                  <div className="forecast-date">
                    {new Date(date).toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '')}
                  </div>
                  <div className="forecast-icon">
                    {getWeatherIcon(weather.daily.weather_code[index])}
                  </div>
                  <div className="forecast-temps">
                    <span className="max-temp">{Math.round(weather.daily.temperature_2m_max[index])}°</span>
                    <span className="min-temp">{Math.round(weather.daily.temperature_2m_min[index])}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;