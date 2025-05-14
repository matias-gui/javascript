// Método Estático para conversão de Temperatura
class Utilitario {
    static converterCelsius(temperaturaCelsius){
        let fahrenheit = (temperaturaCelsius * 1.8) + 32
        console.log(`${temperaturaCelsius}°C, equivale a ${fahrenheit.toFixed(2)}°F`)
    }
}

Utilitario.converterCelsius(20)