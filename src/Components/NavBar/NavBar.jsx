import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav className='navbar navbar-default'>
            <div className='container'>
                <div className='navbar-header'>
                    <h1><a className='navbar-brand' href='#'>Feed<span className='lighter'>In</span></a></h1>
                </div>
                <ul className='nav navbar-nav'>
                    {props.navProps.map((navElement, index) => {
                        return (
                            <li><a key={index} href={navElement.navelement}>{navElement.navbutton}</a></li>
                        );
                    })}
                </ul>
            </div>
        </nav>
      );
}
 
export default NavBar;
