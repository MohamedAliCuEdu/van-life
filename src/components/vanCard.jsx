// react component:
import { useRef } from "react";
import { Link } from "react-router-dom";

function VanCard(props) {
  const { id, name, price, imageUrl, type } = props;

  // icon - add to favourite & animation:
  const favId = useRef();
  function addToFav() {
    favId.current.classList.toggle("fav");
  }
  function iconAnimation() {
    favId.current.classList.toggle("fa-beat");
  }

  return (
    <div key={id} className="van-card">
      <Link to={`:${name}`}>
        <img src={require(`../${imageUrl}`)} alt="van-pics" />
      </Link>
      <div className="details">
        <div className="top">
          <h2 className="name">{name}</h2>
          <i
            className="fa-regular fa-bookmark"
            ref={favId}
            onClick={addToFav}
            onMouseLeave={iconAnimation}
            onMouseEnter={iconAnimation}
          ></i>
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