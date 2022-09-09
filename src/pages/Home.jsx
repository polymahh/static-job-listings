import CompanyCard from '../components/CompanyCard';
import Header from '../components/Header';
import companies from '../Data/data.json';

function Home() {
  console.log(companies);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </main>
      <footer>footer</footer>
    </>
  );
}
export default Home;
