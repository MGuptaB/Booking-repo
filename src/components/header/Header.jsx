import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./header.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {useState} from 'react';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
const Header=({type})=>{
    const [destination,setDestination]=useState("");
    const [openDate,setOpenDate]=useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection"
        },
      ]);
      const[openOptions,setopenOptions]=useState(false);
      const [options,setOptions]=useState({
       adult:1,
       children:0,
       room:1,
      });
      const navigate= useNavigate();
      const handleOptions=(name,operation)=>{
        setOptions((prev)=>{
            return {
                ...prev,
                [name]:operation==="i"? options[name] +1 : options[name]-1,
            };
        });
      };
      const handleSearch=()=>{
        navigate("./hotels",{state:{destination,date,options}})
      }
    return(
     <div className="header">
     <div className={type==="list"? "headerContainer listMode":"headerContainer"}>
        <div className="headerList">
            <div className="headetListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headetListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>flights</span>
            </div>
            <div className="headetListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
            </div>
            <div className="headetListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className="headetListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
            </div>
        </div>
       {type!=="list" &&
        <> <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
            Get rewarded for your travels unlock instant savings of 10% or more with 
            a free MayankBooking account.
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
                   <div className="headersearchItem">
                   <FontAwesomeIcon icon={faBed} className="headerIcon" />
                     <input type="text"
                     placeholder="Where are you going?" 
                     className="headerSearchInput"
                     onChange={e=>{setDestination(e.target.value)}}/>
                   </div>
                   <div className="headersearchItem">
                   <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                   <span onClick={
                    ()=>setOpenDate(!openDate)
                   } 
                   className="headersearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to
                   ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                   </div>
                   {openDate &&
                   (<DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
  minDate={new Date()}
/>
)}


                   <div className="headersearchItem">
                   <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                   <span onClick={()=>setopenOptions(!openOptions)}
                   className="headersearchText">{`${options.adult} adult ${options.children} children ${options.room} room`}</span>

                  
     {openOptions && <div className="options">
        <div className="optionItem">
        
            <span className="optionext">Adult</span>
            <div className="optionCounter">

            <button disabled={options.adult<=1}
            className="optionCounterButton"  onClick={()=>handleOptions("adult","d")}>-</button>
            <span className="optionCounterNumber">{options.adult}</span>
            <button className="optionCounterButton" onClick={()=>handleOptions("adult","i")}>+</button>
        </div>
        </div>
        <div className="optionItem">
        
            <span className="optionext">Children</span>
            <div className="optionCounter">
            <button disabled={options.children<=1}
            className="optionCounterButton" onClick={()=>handleOptions("children","d")}>-</button>
            <span className="optionCounterNumber">{options.children}</span>
            <button className="optionCounterButton" onClick={()=>handleOptions("children","i")}>+</button>
        </div>
        </div>
        <div className="optionItem">
       
            <span className="optionext">Room</span>
            <div className="optionCounter">
            <button disabled={options.room<=1}
            className="optionCounterButton" onClick={()=>handleOptions("room","d")}>-</button>
            <span className="optionCounterNumber">{options.room}</span>
            <button className="optionCounterButton" onClick={()=>handleOptions("room","i")}>+</button>
        </div>
        </div>
        </div>}
      </div>
                   <div className="headersearchItem">
                  <button className="headerBtn" onClick={handleSearch}>Search</button>
                   </div>
                   
        </div></>}
     </div>
     </div>
    )
}
export default Header;