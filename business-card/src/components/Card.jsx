import Buttons from "./Buttons"
import Info from "./Info"
import CardFooter from "./CardFooter"
import profilePhoto from '../assets/Rectangle 90.png'

export default function Card() {
  return (
    <div className="card">
      <img src={profilePhoto} alt="" />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <p>laurasmith.website</p>
      <Buttons/>
      <Info/> 
      <CardFooter/>
    </div>
  )
}