import video from '../data/video.js';
import Video from './Video.js';
import Comments from './Comments.js';
import { useState } from 'react';

function App() {
  console.log("Here's your data:", video);
  const [isOn, setIsOn] = useState(true);

  function handleHide() {
    setIsOn(!isOn);
  }

  return (
    <div className='App'>
      <Video video={video} />
      <div>
        <button onClick={handleHide}>Hide Comments</button>
        {isOn ? <Comments video={video} /> : null}
      </div>
    </div>
  );
}

export default App;
