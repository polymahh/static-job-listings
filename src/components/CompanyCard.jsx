// import img from '../images/photosnap.svg';

function CompanyCard({ company }) {
  return (
    <div
      className="CompanyCard"
      style={{ borderColor: company.featured ? 'hsl(180, 29%, 50%)' : 'white' }}
    >
      <div className="image">
        <img src={company.logo} alt="logo" width={50} height={50} />
      </div>
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
      <h3 className="position">{company.position}</h3>

      <div className="info">
        <span className="infoOne">{company.postedAt}</span>
        <em> &#8226;</em>
        <span className="infoOne">{company.contract}</span>
        <em> &#8226;</em>
        <span className="infoOne">{company.location}</span>
      </div>
      <hr />
      <div className="language">
        <span className="tag">{company.role}</span>
        <span className="tag">{company.level}</span>
        {company.languages &&
          company.languages.map((lang) => <span className="tag">{lang}</span>)}
        {company.tools &&
          company.tools.map((tool) => <span className="tag">{tool}</span>)}
      </div>
    </div>
  );
}

export default CompanyCard;
