const { contextBridge } = require('electron')

// Context bridge between node process and web renderer
contextBridge.exposeInMainWorld('electron', {
    getWeatherAPIKey: () =>  process.env.WEATHER_API_KEY,
    getWeatherAPICity: () =>  process.env.WEATHER_API_CITY
})
