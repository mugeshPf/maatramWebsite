export const HELLO_WORLD = 'HELLO_WORLD'
export const RESET = 'RESET'

export const onClick = () => {
  return  {
    type: HELLO_WORLD
  }
}

export const onReset = () => {
  return {
    type: RESET
  }
}