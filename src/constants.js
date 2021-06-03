import config from 'config'

const getTopic = (feedKey) => `${config.mqtt.username}/feeds/${feedKey}`

export const LIGHT_SENSOR_TOPIC = getTopic('bk-iot-light')

export const LIGHT_SENSOR_DATA = {
  id: 13,
  name: 'LIGHT',
  unit: '',
}

export const IOT_LED_TOPIC = getTopic('bk-iot-led')

export const LED_DATA = {
  id: 1,
  name: 'LED',
  unit: '',
}

export const IOT_OFF = 0
export const IOT_RED = 1
export const IOT_GREEN = 2
