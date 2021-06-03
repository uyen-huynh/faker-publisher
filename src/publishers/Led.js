import faker from 'faker'

import { IOT_LED_TOPIC, LED_DATA } from 'constants'
import config from 'config'

export default (client) => {
  let data = 1
  setInterval(() => {
    // const data = faker.datatype.number({ min: 0, max: 1 })
    console.log('Light', data)
    client.publish(IOT_LED_TOPIC, JSON.stringify({ ...LED_DATA, data }))
  }, config.timeInterval)

  client.subscribe(IOT_LED_TOPIC)
  client.on('message', (topic, message) => {
    const { data: light } = JSON.parse(message)
    data = light
  })
}
