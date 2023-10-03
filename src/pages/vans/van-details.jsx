// react components:
import React from "react";
import { useRef } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

// components:
import FavIcon from "../../components/fav-Icon";
import RatingStars from "../../components/rating-stars";

// style files:
import "../../style/pages/van-details.scss";

function VanDetails() {
  // get [van_data] from [loader]:
  const allVans = useLoaderData();
  const param = useParams();
  const van = allVans.filter((obj) => ":" + obj.name === param.item)[0];
  const { name, type, price, description, imageUrl } = van;

  // if condition for bg-c tovan type:
  // const [bgClass, setBgClass] = useState("bg-green");
  let bgClass = "";
  switch (type) {
    case "luxury":
      bgClass = "bg-black";
      break;
    case "rugged":
      bgClass = "bg-green";
      break;
    case "simple":
    default:
      bgClass = "bg-orange";
      break;
  }

  // close / open Image veiw:
  const veiwId = useRef();

  function handleImgVeiw(){
    veiwId.current.classList.toggle("veiw");
    document.querySelector(".root").classList.toggle("fit-height");
  }
  return (
    <>
      <main className="van-data page-content">
        <div className="container">
          <Link className="back-btn" to="/vans">
            <i className="fa-solid fa-caret-left"></i>
            <span>back to all vans</span>
          </Link>
          <section>
            <div className="sec-1">
              <div className="img-container">
                <div className="img-options">
                  <button className="veiw" onClick={handleImgVeiw} title="veiw image.">
                    <i className="fa-solid fa-expand"></i>
                  </button>
                  <a
                    href={require(`../../${imageUrl}`)}
                    download={name}
                    title="download image"
                  >
                    <i className="fa-solid fa-download"></i>
                  </a>
                </div>
                <img src={require(`../../${imageUrl}`)} alt={name} />
              </div>
              <div className="user">
                <div className="user-rating">
                  <span>rating:</span>
                  <RatingStars />
                </div>
                <div className="user-favourite">
                  <span>add to favourites:</span>
                  <FavIcon />
                </div>
              </div>
              <button className="rent-btn">rent this van</button>
            </div>
            <div className="sec-2">
              <div className="info row">
                <h1>van: {name}</h1>
                <div className="type">
                  <h4>van type:</h4>
                  <span className={bgClass}>{type}</span>
                </div>
                <div className="price">
                  <h4>price:</h4>
                  <span>
                    ${price}
                    <sub>/day</sub>
                  </span>
                </div>
              </div>
              <div className="description row">
                <h3>description:</h3>
                <p>{description}</p>
              </div>
              <div className="points row">
                <h3>specifications:</h3>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="full-img" ref={veiwId}>
        <div className="container">
        <button className="close-btn" onClick={handleImgVeiw}>X</button>
        <img src={require(`../../${imageUrl}`)} alt={name} />
        </div>
      </div>
    </>
  );
}

export default VanDetails;
