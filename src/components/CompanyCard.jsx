import { useContext } from 'react';
import MyContext from '../MyContext';

function CompanyCard({ company }) {
  const { addTag } = useContext(MyContext);
  return (
    <div
      key={company.id}
      className="CompanyCard"
      style={{ borderColor: company.featured ? 'hsl(180, 29%, 50%)' : 'white' }}
    >
      <div className="image">
        <img src={company.logo} alt="logo" width={50} height={50} />
      </div>
      <div className="infoContainer">
        <div className="featured">
          <h3 className="company">{company.company}</h3>
          {company.new && (
            <span
              className="new"
              style={{ backgroundColor: 'hsl(180, 29%, 50%)' }}
            >
              NEW!
            </span>
          )}
          {company.featured && <span className="features">FEATURED</span>}
        </div>
        <h2 className="position">{company.position}</h2>

        <div className="info">
          <span className="infoOne">{company.postedAt}</span>
          <em> &#8226;</em>
          <span className="infoOne">{company.contract}</span>
          <em> &#8226;</em>
          <span className="infoOne">{company.location}</span>
        </div>
      </div>
      <hr />
      <div className="language">
        <button
          type="button"
          className="tag"
          onClick={(e) => addTag(e.target.innerText)}
        >
          {company.role}
        </button>
        <button
          type="button"
          className="tag"
          onClick={(e) => addTag(e.target.innerText)}
        >
          {company.level}
        </button>
        {company.languages &&
          company.languages.map((lang) => (
            <button
              type="button"
              className="tag"
              onClick={(e) => addTag(e.target.innerText)}
            >
              {lang}
            </button>
          ))}
        {company.tools &&
          company.tools.map((tool) => (
            <button
              type="button"
              className="tag"
              onClick={(e) => addTag(e.target.innerText)}
            >
              {tool}
            </button>
          ))}
      </div>
    </div>
  );
}

export default CompanyCard;
