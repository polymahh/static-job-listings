import { useContext } from 'react';
import MyContext from '../MyContext';

function Header() {
  const { tags, setTags } = useContext(MyContext);

  console.log(tags);

  return (
    <div className="headContainer">
      <div className="tagPreview">
        {tags.map((tag, index) => {
          const num = index;
          return (
            <div key={num} className="tagContainer">
              <span className="tag">{tag}</span>
              <img src="images/icon-remove.svg" alt="remove" />
            </div>
          );
        })}
      </div>
      <div className="clear">
        <h3>Clear</h3>
      </div>
    </div>
  );
}
export default Header;
