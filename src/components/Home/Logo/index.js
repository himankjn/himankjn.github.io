import LogoH from '../../../assets/images/HLogo.png'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        src={LogoH}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
