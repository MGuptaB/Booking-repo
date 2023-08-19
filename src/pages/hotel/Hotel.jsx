import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

import MailList from "../../components/maiList/MailList"
import Footer from "../../components/footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Hotel=()=>{
    const [slideNumber,setSlideNumber]= useState(0);
    const [open,setOpen]=useState(false);
    const photos=[
        {
    src:"https://imgs.search.brave.com/zSviKUKE5iqLDIoCqgrhxn6M5w3_Do1PQPWp9O6s10U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFqaG90ZWxzLmNv/bS9jb250ZW50L2Rh/bS9sdXh1cnkvaG90/ZWxzL1Rhal9MYWtl/X1BhbGFjZV9VZGFp/cHVyL2ltYWdlcy9p/bWFnZXMyMDIxL1RM/UF9DaGFuZHJhUHJh/a2FzaF9HcmFuZC1S/b3lhbC1TdWl0ZS5q/cGcvamNyOmNvbnRl/bnQvcmVuZGl0aW9u/cy9jcTVkYW0ud2Vi/Ljc1Ni43NTYuanBl/Zw"
        },
        { src:"https://imgs.search.brave.com/tLvWHwkkHfGIbKXFbxhIiRtbKoV19U2oMc1qrJrQKpE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAz/Mzg1OTc2Ni9waG90/by90YWotbWFoYWwt/aG90ZWwuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUw4YlZM/X1ozXzRRaGZwTFlr/ME9MQnR3anNVVGR2/SHFQUEo5aGNuRmRo/OHM9"
      },
    {
        src:"https://imgs.search.brave.com/tLvWHwkkHfGIbKXFbxhIiRtbKoV19U2oMc1qrJrQKpE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAz/Mzg1OTc2Ni9waG90/by90YWotbWFoYWwt/aG90ZWwuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUw4YlZM/X1ozXzRRaGZwTFlr/ME9MQnR3anNVVGR2/SHFQUEo5aGNuRmRo/OHM9"    },
      {
      src:"https://imgs.search.brave.com/zSviKUKE5iqLDIoCqgrhxn6M5w3_Do1PQPWp9O6s10U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFqaG90ZWxzLmNv/bS9jb250ZW50L2Rh/bS9sdXh1cnkvaG90/ZWxzL1Rhal9MYWtl/X1BhbGFjZV9VZGFp/cHVyL2ltYWdlcy9p/bWFnZXMyMDIxL1RM/UF9DaGFuZHJhUHJh/a2FzaF9HcmFuZC1S/b3lhbC1TdWl0ZS5q/cGcvamNyOmNvbnRl/bnQvcmVuZGl0aW9u/cy9jcTVkYW0ud2Vi/Ljc1Ni43NTYuanBl/Zw"
    },
     {
     src:"https://imgs.search.brave.com/zSviKUKE5iqLDIoCqgrhxn6M5w3_Do1PQPWp9O6s10U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFqaG90ZWxzLmNv/bS9jb250ZW50L2Rh/bS9sdXh1cnkvaG90/ZWxzL1Rhal9MYWtl/X1BhbGFjZV9VZGFp/cHVyL2ltYWdlcy9p/bWFnZXMyMDIxL1RM/UF9DaGFuZHJhUHJh/a2FzaF9HcmFuZC1S/b3lhbC1TdWl0ZS5q/cGcvamNyOmNvbnRl/bnQvcmVuZGl0aW9u/cy9jcTVkYW0ud2Vi/Ljc1Ni43NTYuanBl/Zw"
      },
      {
        src:"https://imgs.search.brave.com/zSviKUKE5iqLDIoCqgrhxn6M5w3_Do1PQPWp9O6s10U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFqaG90ZWxzLmNv/bS9jb250ZW50L2Rh/bS9sdXh1cnkvaG90/ZWxzL1Rhal9MYWtl/X1BhbGFjZV9VZGFp/cHVyL2ltYWdlcy9p/bWFnZXMyMDIxL1RM/UF9DaGFuZHJhUHJh/a2FzaF9HcmFuZC1S/b3lhbC1TdWl0ZS5q/cGcvamNyOmNvbnRl/bnQvcmVuZGl0aW9u/cy9jcTVkYW0ud2Vi/Ljc1Ni43NTYuanBl/Zw"
         },

    ];
    const handleOpen=(i)=>{
      setSlideNumber(i);
      setOpen(true);
    }
    const handleMove=(direction)=>{
        console.log("hello");
        let newSlideNumber;
        if(direction ==="r")
        {
            newSlideNumber = slideNumber === 5 ? 0:slideNumber+1;

        }
        else
        {
            newSlideNumber = slideNumber === 0 ? 5:slideNumber-1;
        }
        setSlideNumber(newSlideNumber);
    };
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
           {open && (<div className="slider">
               <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
               <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
               <div className="sliderWrapper">
                  <img src={photos[slideNumber].src} alt="" className="sliderImg" />
               </div>
               <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>

            </div>)}
                <div className="hotelWrapper">
                <button className="bookNow">
                    Reserve or Book Now!
                </button>
                    <h1 className="hotelTitle">Grand Hotel </h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location -500m from center
                    </span>
                    <span className="hotelPriceHighLight">
                        Book a stay over $114 at this property and got a free airport taxi
                    </span>
                          <div className="hotelImages">
                            {photos.map((photo,i)=>(
                                <div className="hotelImgWrapper">
                                    <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                                </div>
                            ))}
                          </div>
                          <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                                <p className="hotelDesc">
                                    Located a 5-minte walk from St. Florian's Gate in Krakow, Tower
                                    Street Apartments has accomdations with air conditioning and free 
                                    Wifi. The units come with hardwood floors and  feature a 
                                    fully equipped kitchenette with a microwave, a flat-screen TV,
                                    and a private bathroom with shower and hairdryer. A fridge imgsalso offered, as well as an electric tea pot and a coffee
                                    machine. Popular points of interests near the aprtment include
                                    Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                    airport is John Paul II international Krakow Balice, 16.1 zSviKUKE5iqLDIoCqgrhxn6M5w3_Do1PQPWp9O6s10Ufrom Tower Street Apartments, and the property offers a paid
                                    airport shuttle service.
                                </p>
                            </div>
                                <div className="hotelDetailsPrice">
                                    <h1>Perfect for a 9-night stay!</h1>
                                    <span>
                                        Located in the real heart of Krakow, this property has an excellent location
                                        score of 9.8!
                                    </span>
                                    <h2>
                                        <b>$945</b>(9 nights)
                                    </h2>
                                    <button>Reserve or book Now!</button>
                                </div>
                            
                          </div>
                </div>
          <MailList/>
          <Footer/>
            </div>
        </div>
    );
}
export default Hotel;