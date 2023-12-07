import React from 'react'

import { Button, Text } from 'button-ee-ui'
import 'button-ee-ui/dist/index.css'

const App = () => {
  return (
    <div>
      <Button text='Primary Button' type='primary' />
      <Button text='Default Button' type='default' />
      <Button text='Dashed Button' type='Dashed' />
      <br />
      <Button text='Text Button' type='text' />

      <Button text='Link Button' type='link' />
      <br />
      <br />
      <br />
      <Text text='There are - primary - button, - default - button, - dashed - button, - text - button and , - link - button in button-ee-ui' />
    </div>
  )
}

export default App
