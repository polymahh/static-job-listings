import CompanyCard from '../components/CompanyCard';
import Header from '../components/Header';
import companies from '../Data/data.json';

function Home() {
  return (
    <>
      <header />
      <main>
        <Header />
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </main>
      <footer>footer</footer>
    </>
  );
}
export default Home;
