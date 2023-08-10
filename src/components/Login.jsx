import {React, useState} from 'react'
import Popup from "./Popup.jsx"
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate= useNavigate();
  const [type, setType] = useState({
    alpha:"password",
    icon:"fa-regular fa-eye"
  });
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const handleLogin=async(e)=>{
    try {
      e.preventDefault();
      const response= await fetch("http://localhost:5000/api/login", {

      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify( { email,password } )    });
      const data = await response.json();
      if (response.status===200) {
        setPopupMessage("Login Succesfull !");
        setShowPopup(true);
      }
      else 
      {
        setPopupMessage(data.errors[0]) ;
        setShowPopup(true);
      }

    }
    
   catch (error) {
    setPopupMessage("Internal Server Error")
       setShowPopup(true)
      console.error('Error:', error);
  }}
  const closePopup = () => {
    setShowPopup(false);
    if(popupMessage==="Login Succesfull !"){
      navigate("/home");
    }
  };
    return (
      <>
    <div className="page">
   <form className='logform bg-dark' onSubmit={handleLogin}>
   <h2 className='text-center'>Login</h2><br />

  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    
  </div><br />
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <div style={{display:"flex", alignItems:"center"}}>
    <input type={type.alpha} className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <i className={type.icon}  style={{paddingLeft:"5px"}} onClick={()=>{type.alpha==="password"?setType({
      alpha:"text",
      icon:"fa-regular fa-eye-slash"
    }):setType({
      alpha:"password",
      icon:"fa-regular fa-eye"
    })}}></i></div>

  </div><br />
  
  <button type="submit" className="btn butt">Login</button>
    
</form>
      {showPopup && <Popup message={popupMessage} onClose={closePopup} />}

</div>
    </>
  )
}

export default Login