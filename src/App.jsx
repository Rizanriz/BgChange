import react from 'react'
import './App.css'

function App() {

  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <div className='main'>
        <div>
          <h1>Background Colour Change</h1>
        </div>
        <div className='btn'>
          <button onClick={() => changeBackgroundColor('white')}>White</button>
          <button onClick={() => changeBackgroundColor('black')}>Black</button>
          <button onClick={() => changeBackgroundColor('green')}>Green</button>
          <button onClick={() => changeBackgroundColor('red')}>Red</button>
          <button onClick={() => changeBackgroundColor('purple')}>Purple</button>
          <button onClick={() => changeBackgroundColor('yellow')}>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
