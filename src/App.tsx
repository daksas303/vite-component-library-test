import './App.css'
import 'tailwindcss/tailwind.css'

import React from 'react'

import { Button, Input, Swipebar } from '../lib/main'

const App: React.FC = () => {
  return (
    <>
      <Button label="Test button label" onClick={() => alert('clicked')} />
      <Swipebar />
      <Input />
    </>
  )
}

export default App
