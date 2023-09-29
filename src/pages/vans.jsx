// react component:
import {
  Link,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";

// style files:
import "../style/pages/vans.scss";

// components:
import VanCard from "../components/vanCard";

function Vans() {
  // [vans data] from Loader:
  const allVans = useLoaderData();

  // filter vans:
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? allVans.filter((v) => v.type === typeFilter)
    : allVans;

  return (
    <main className="vans-page">
      <div className="container">
        <h1>explore our vans options</h1>
        <nav className="filters">
          <div className="type-btns">
            <Link className={`simple ${typeFilter === "simple"? "active" : null}`} to="?type=simple">
              simple
            </Link>
            <Link className={`luxury ${typeFilter === "luxury"? "active" : null}`} to="?type=luxury">
              luxury
            </Link>
            <Link className={`rugged ${typeFilter === "rugged"? "active" : null}`} to="?type=rugged">
              ragged
            </Link>
          </div>
          <button className="clear-btn" onClick={() => setSearchParams({})}>
            clear filters
          </button>
        </nav>
        <section className="vans-list">
          {displayedVans.map((van) => (
            <VanCard key={van.id} {...van} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Vans;