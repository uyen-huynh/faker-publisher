import faker from 'faker'

import { LIGHT_SENSOR_DATA, LIGHT_SENSOR_TOPIC } from 'constants'
import config from 'config'

export default (client) => {
  setInterval(() => {
    const data = faker.datatype.number({ min: 0, max: 1023 })
    console.log('LIGHT SENSOR SEND: ', data)
    client.publish(
      LIGHT_SENSOR_TOPIC,
      JSON.stringify({ ...LIGHT_SENSOR_DATA, data })
    )
  }, config.timeInterval)
}
