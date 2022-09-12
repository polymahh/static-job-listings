import { useState, useEffect, useContext } from 'react';
import CompanyCard from '../components/CompanyCard';
import Header from '../components/Header';
import companies from '../Data/data.json';
import MyContext from '../MyContext';

function Home() {
  const [filtered, setFiltered] = useState(companies);

  const { tags } = useContext(MyContext);

  const keys = ['languages', 'tools', 'role', 'level'];

  const search = (data) =>
    data.filter((comp) => {
      const jobTags = keys.map((key) => comp[key]).flat();
      return jobTags.some((tag) => tags.includes(tag));
    });

  useEffect(() => {
    setFiltered(search(companies));
  }, [tags]);

  return (
    <>
      <header />
      <main>
        <Header />
        {filtered.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </main>
      <footer>{/* footer */}</footer>
    </>
  );
}
export default Home;
