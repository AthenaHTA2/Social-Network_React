import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";



function Card(props){
return(

    <div className="card" >
        <div className="top" >
            <h2 className="name">{props.name}</h2>
            {/* <img className="circle-img" src={props.img} alt="contact_img" /> */}
            <Avatar img={props.img} />
        </div>
        <div className="bottom">
            <Detail detailInfo= {props.tel} />
            <Detail detailInfo= {props.email} />
        </div>
    </div>

);
}

export default Card

