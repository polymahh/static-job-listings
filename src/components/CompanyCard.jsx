function CompanyCard({ company }) {
  return (
    <div className="CompanyCard">
      <div className="image">
        <img src="/" alt="logo" />
      </div>
      <span className="company">{company.company}</span>
      <span className="position">{company.position}</span>
      <div>
        {company.New && <span className="new">NEW!</span>}
        {company.featured && <span className="features">Features</span>}
      </div>
      <div>
        <span className="infoOne">{company.postedAt}</span>
        <span className="infoOne">{company.contract}</span>
        <span className="infoOne">{company.location}</span>
      </div>
      <hr />
      <div>
        <span className="infoTwo">{company.role}</span>
        <span className="infoTwo">{company.level}</span>
        <span className="infoTwo">{company.languages}</span>
        <span className="infoTwo">{company.tools}</span>
      </div>
    </div>
  );
}

export default CompanyCard;
