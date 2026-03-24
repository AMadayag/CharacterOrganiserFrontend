import './CharacterCreateForm.css'
import { useState } from 'react';

function CharacterCreateForm({ onCreateCharacterClose }) {
  const [name, setName] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    // api call

    setName('') // reset name
    onCreateCharacterClose()
  }

  return (
    <div className="page-container">
      <form onSubmit={handleSubmit}>
        <h3>NEW CHARACTER</h3>
        <label className="labels">
          Name
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input className="submit-btn" type="submit" value="Create" />
      </form>
    </div>
  );
}

export default CharacterCreateForm;