import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
// import Card from "./Card.jsx";
import createCard from "./Card.jsx"
import myContacts from "../myContacts";
import Avatar from "./Avatar.jsx"






function App(){
    
    return (<div><Header />
    <h1 className="heading" >My Contacts</h1>
    <Avatar
        img = "https://images.immediate.co.uk/production/volatile/sites/22/2020/05/GettyImages-1159000181-cc12690.jpg?quality=90&webp=true&resize=724,483"
    />

    {myContacts.map(createCard)}

    {/* <Card
        name = {myContacts[0].name} 
        img = {myContacts[0].img}
        tel = {myContacts[0].tel}
        email = {myContacts[0].email}
    />
        <Card
        name = {myContacts[1].name} 
        img = {myContacts[1].img}
        tel = {myContacts[1].tel}
        email = {myContacts[1].email}
    />    
    <Card
        name = {myContacts[2].name} 
        img = {myContacts[2].img}
        tel = {myContacts[2].tel}
        email = {myContacts[2].email}
    /> */}

       <Note />
     <Footer />
    </div>)
    
}

export default App;