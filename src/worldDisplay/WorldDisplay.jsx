import './WorldDisplay.css'
import { baseUrl } from '../url';

function WorldDisplay() {
  const [worlds, setWorlds] = useState([])

  useEffect(() => {
    getWorlds();
  }, []);

  async function getWorlds() {
    const response = await fetch(`${baseUrl}/world`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json();
    setWorlds(data);
  }
  return (
    <div className='characterDisplay-container'>
      {worlds.map((world) => (
        <div key={world.id}>{world.name}</div>
      ))}
    </div>
  );
}

export default WorldDisplay;
