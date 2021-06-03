import mqtt from 'mqtt'

import config from 'config'
import { LightSensorPublisher, Led } from 'publishers'

const client = mqtt.connect(config.mqtt)

client.on('connect', () => {
  console.log('connected')
  LightSensorPublisher(client)
  Led(client)
})

client.on('error', (err) => {
  console.log(err)
  client.end()
})
