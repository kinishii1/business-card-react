import emailIcon from '../assets/Mail.png'
import linkedinIcon from '../assets/linkedin.png'

export default function Buttons() {
  return (
    <div className="buttons">
      <button><img src={emailIcon} />Email</button>
      <button><img src={linkedinIcon} />LinkedIn</button>
    </div>
  )
}