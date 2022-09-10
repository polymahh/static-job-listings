import { useState } from 'react';
import MyContext from './MyContext';
import Home from './pages/Home';

function App() {
  const [tags, setTags] = useState(['HTML', 'CSS', 'JavaScript']);
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <MyContext.Provider value={{ tags, setTags }}>
      <div className="App">
        <Home />
      </div>
    </MyContext.Provider>
  );
}

export default App;
