import './App.css'
import Sidebar from './sidebar/Sidebar'
import CharacterCreateForm from './characterForm/CharacterCreateForm'
import CharacterDisplay from './characterDisplay/CharacterDisplay'
import { useState } from 'react'

function App() {
  const [showCharacterForm, setShowCharacterForm] = useState(false)
  return (
    <>
      <Sidebar onNewCharacter={() => setShowCharacterForm(true)} />
      {showCharacterForm &&
        <CharacterCreateForm onCreateCharacterClose={() => setShowCharacterForm(false)}/>}
      <CharacterDisplay />
    </>
  )
}

export default App
