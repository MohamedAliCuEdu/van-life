// react component:
import { useRef } from "react";
import { Link } from "react-router-dom";

// components:
import FavIcon from './fav-Icon';

function VanCard(props) {
  const { id, name, price, imageUrl, type } = props;

  return (
    <div key={id} className="van-card">
      <Link to={`/vans/:${name}`}>
        <img src={require(`../${imageUrl}`)} alt="van-pics" />
      </Link>
      <div className="details">
        <div className="top">
          <h2 className="name">{name}</h2>
          <FavIcon id={id}/>
        </div>
        <div className="bottom">
          <span className={`type ${type}`}>{type}</span>
          <span className="price">
            {price}
            <sub>/day</sub>
          </span>
        </div>
      </div>
    </div>
  );
}

export default VanCard;