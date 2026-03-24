import './CharacterDisplay.css'
import { baseUrl } from '../url';

function CharacterDisplay({ worldId }) {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters();
  }, [worldId]);

  async function getCharacters() {
    const response = await fetch(`${baseUrl}/${worldId}/character`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json();
    setCharacters(data);
  }
  return (
    <div className='characterDisplay-container'>
      {characters.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}

export default CharacterDisplay;