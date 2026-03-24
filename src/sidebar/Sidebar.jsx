import './Sidebar.css'
import { useState } from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { HiMapPin } from "react-icons/hi2";

function Sidebar({ onNewCharacter }) {
  const [isPoppedUp, setIsPoppedUp] = useState(false)

  const handleFabClick = () => {
    if (isPoppedUp) {
      setIsPoppedUp(false)
    } else {
      setIsPoppedUp(true)
    }
  }

  return(
    <>
    <div>
      <div className='sidebar-container'>
        {isPoppedUp && <div className='sidebar-popup-btns-container'>
          {/* sidebar pop up buttons*/}
          <button
            onClick={onNewCharacter}
            className='add-popup-btn'
            variant='contained'>
            <IoPersonSharp/>
          </button>
          <button
            className='add-popup-btn'
            variant='contained'>
            <HiMapPin />
          </button>
        </div>}
        {/* FAB */}
        <button
          className={`floating-action-button ${isPoppedUp ? 'open' : ''}`}
          onClick={handleFabClick}
        >+</button>
      </div>
    </div>
    </>
  )
}

export default Sidebar
