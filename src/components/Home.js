import React, {useState} from 'react'
import Modal from './Modal';


const Home = () => {

  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  
  
  const handleClick = () => {
    setToggle(!toggle);
    if(toggle){
        return <Modal toggle={toggle} />
    } else {
        return;
    }
  }

  return (
    <div>
        <button 
            className='App-button'
            onClick={handleClick}
        >
            Whats up!
        </button>        
    </div>
  )
}

export default Home