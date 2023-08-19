import { useNavigate } from "react-router-dom";
import "./searchItem.css";
const SearchItem=()=>{
  const navigate= useNavigate();
  const handlethis=()=>{
  navigate("./:id")
  }
    return(
<div className="searchItem">
  <img src="https://imgs.search.brave.com/Mp866VnZnhrsLqbw5TM7-BEeW-wYgXk27ITSAAgGvjw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWxsLWZyZWUt/ZG93bmxvYWQuY29t/L2ltYWdlcy9ncmFw/aGljbGFyZ2UvaG90/ZWxfcm9vbV9zdG9j/a19waG90b181MTU4/MjEuanBn" alt="" className="siImg" />
  <div className="siDesc">
    <h1 className="siTitle">Tower Street Apartments</h1>
    <span className="siDistance">500m from center</span>
    <span className="siTaxiOp">Free airport taxi</span>
    <span className="siSubtitle">
        Studio Apartment with Air conditioning
    </span>
    <span className="siFeatures">
        Entire studio . 1 bathroom . 21m2 1 full bed
    </span>
    <span className="siCancelOp">Free cancellation</span>
    <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
    </span>
  </div>

  <div className="siDetails">
  <div className="siRating">
    <span >Excellent</span>
    <button>8.9</button>
    </div>
    <div className="siDetailTexts">
        <span className="siPrice">$123</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton" onClick={handlethis}>See availability</button>
    </div>
  </div>
  </div>
  
    );
}
export default SearchItem;