import dotenv from 'dotenv'

dotenv.config()

const config = {
  mqtt: {
    clientId: process.env.CLIENT_ID,
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
  },
  timeInterval: process.env.TIME_INTERVAL,
}

export default config
