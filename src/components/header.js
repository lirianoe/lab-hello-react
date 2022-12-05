import Logo from '../logo.svg'

function Header() {
    return (
        <div className="header-content">
            <div className="header-text">
            <h1>Say hello to <br/> ReactJS</h1>
            <p>You will learn how to use <br/> the most popular frontend library <br/>  and become a super ninja Developer</p>
            
            
            <button>Awesome!</button>
            

            <img src={Logo} className="rLogo1"/>
        <img src={Logo} className="rLogo2"/>
        <img src={Logo} className="rLogo3"/>
             
        </div>
        </div>
    )
}

export default Header