import React from 'react'
import profile from "../src/Image/th.jpeg"
import foot1 from "./Image/th.jpg"
import './index.css'
import facebook from './Image/facebook.png'
import insta from './Image/instagram.png'
import linkdin from './Image/linkedin.png'
import whatsapp from './Image/whatsapp.png'
function call(){
  alert("clicked")
}
function App() {
  return (
   <div className="Container">
    <div className="card">
    <div className="imgcontainer">
      <img src={profile} alt="not found" />
      <h1>Kratos</h1>
      <p>GOD OF WAR</p>
      <p>Inpro.com</p>
      <div className="btn">
        <button onClick={call}><img src={foot1} alt="" />Login</button>
        <button><img src={foot1} alt="" />email</button>
      </div>
    </div>
    <div className="body">
      <div className="para1">
        <h3>about</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi reprehenderit asperiores delectus harum, dignissimos voluptate porro laborum dicta, tenetur, beatae ipsam neque consequatur assumenda! Cum earum ut placeat dolor. Eum!</p>
      </div>
      <div className="para2">
        <h3>contack</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aspernatur sed fuga possimus asperiores, qui aut sunt cum vitae doloribus quisquam est commodi. Harum et, distinctio itaque similique officiis saepe.</p>
      </div>
    </div>
    <div className="footer">

      <img src={insta} alt="" id='insta'/>
      <img src={whatsapp} alt="" id='whatsapp'/>
      <img src={facebook} alt="" id='facebook'/>
      <img src={linkdin} alt="" id='linkdin'/>
    </div>
    </div>
   </div>
  );
}

export default App;