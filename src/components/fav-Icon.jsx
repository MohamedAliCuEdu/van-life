// react components:
import { useRef } from "react";

function FavIcon() {
  // icon - add to favourite & animation:
  const favId = useRef();
  function addToFav() {
    favId.current.classList.toggle("fav");
  }
  function iconAnimation() {
    favId.current.classList.toggle("fa-beat");
  }
  return (
    <i
      className="fa-regular fa-bookmark fav-icon"
      ref={favId}
      onClick={addToFav}
      onMouseLeave={iconAnimation}
      onMouseEnter={iconAnimation}
    ></i>
  );
}

export default FavIcon;