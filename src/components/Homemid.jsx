import React, { useState, useEffect } from "react";
// import Popup from "./Popup";
import "../App.css";

const Homemid = () => {
  
  const [feedData, setFeedData] = useState([]);
  // const [showPopup, setShowPopup] = useState(false);
  // const [popupMessage, setPopupMessage] = useState('');
  useEffect(() => { fetchFeedData() }, []);
  
  const fetchFeedData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/feed");
      if (response.ok) {
        const data = await response.json();
         const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setFeedData(sortedData); // Update state with fetched feed data
      } else {
        console.error("Error fetching feed:", response.statusText);
      }
      } catch (error) {
      console.error("Error fetching feed:", error);
      }
      };
  //  const handleDelete=async()=>{
  //       try {

  //         const response= await fetch("http://localhost:5000/api/delete", {
    
  //         method: 'DELETE',
  //         headers: {'Content-Type': 'application/json' }   });
         
  //         const data = await response.json();
  //         if (response.status===201) {
  //           setPopupMessage("Post Deleted");
  //           setShowPopup(true);
  //         }
  //         else 
  //         {
  //           setPopupMessage(data.errors[0]) ;
  //           setShowPopup(true);
  //         }
    
  //       }
        
  //      catch (error) {
  //       setPopupMessage("Internal Server Error")
  //          setShowPopup(true)
  //         console.error('Error:', error);
  //     }}

  //     const closePopup = () => {
  //       setShowPopup(false);
  //     };
      
        return (
            <div id="homemid vstack gap-3" >
             {feedData.map((post, index) => (
              <div key={index} className="card p-1" style={{ background: "rgb(248, 217, 177)" , margin:"20px"}} >
                <div id="feed" className="card-body feed">
                  <div className="d-flex mb-3">
                    <h1 className="card-title  me-auto p-2">{post.title}</h1>
                    <i className="fa-solid fa-pen p-4" ></i>
                    <i className="fa-regular fa-trash-can p-4" ></i>
                  </div><hr />
                  <p className="card-text" style={{fontFamily:"light"}} >#{post.tag}</p>
                  <p className="card-text">{post.description}</p>
          <div className="d-flex justify-content-between"><i>{new Date(post.date).toLocaleString()}</i><i>-{post.author}</i></div>
         
        </div>
        {/* <br /> */}
      </div> 
      ))}
      {/* {showPopup && <Popup message={popupMessage} onClose={closePopup} />} */}
        </div>
              
              );
}
export default Homemid;
