import { useState } from 'react';
import MyContext from './MyContext';
import Home from './pages/Home';

function App() {
  const [tags, setTags] = useState(['Frontend', 'Junior']);

  const clearTags = () => {
    setTags([]);
  };

  const addTag = (tag) => {
    if (!tags.find((item) => tag === item)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tag) => {
    const index = tags.indexOf(tag);
    if (tags[index]) {
      tags.splice(index, 1);
      const arr = tags;
      setTags([...arr]);
    }
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <MyContext.Provider value={{ tags, clearTags, addTag, removeTag }}>
      <div className="App">
        <Home />
      </div>
    </MyContext.Provider>
  );
}

export default App;
