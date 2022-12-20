import { useEffect, useState } from "react";
import("../css/viewcontact.css");




function Contacts() {
  
  const [contacts, setContacts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/contacts/viewcontact");
    const data = await response.json();

    setContacts(data);
  };

  
  useEffect(() => {
    fetchData();
  }, []);
  
 
 
  
  return (
    <>

    
    <div className="container_Product">
      {contacts.map((contact, i) => {
        return (
          <div key={i}>
            <div className="contentProduct_container">
              
              <h3>{contact.name}  {contact.surname}</h3>
              
              
              <p >Numero: {contact.tNumber}</p>
              <p >Cumpleaños: <br /> {contact.bdate}</p>
 
            </div>
          </div>
        );
      })}
    </div>
  </>
  );

  }
export default Contacts;
