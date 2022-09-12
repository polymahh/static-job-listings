/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import MyContext from '../MyContext';

function Header() {
  const { tags, clearTags, removeTag } = useContext(MyContext);

  return tags[0] ? (
    <div className="headContainer">
      <div className="tagPreview">
        {tags.map((tag, index) => {
          const num = index;
          return (
            <div key={num} className="tagContainer">
              <span className="tag">{tag}</span>
              <button type="button" onClick={(e) => removeTag(tag)}>
                <img src="images/icon-remove.svg" alt="remove" />
              </button>
            </div>
          );
        })}
      </div>
      <div className="clear" onClick={clearTags}>
        <h3>Clear</h3>
      </div>
    </div>
  ) : (
    <div>{/* empty */}</div>
  );
}
export default Header;
