const NavBar = (props) => {
    return (
        <nav className='navbar default'>
            <div className='container'>
                <div className='navbar-header'>
                    <h1><a className='navbar-brand' href='#'>Feed<span className='lighter'>In</span></a></h1>
                </div>
                <ul className='navigation'>
                    {props.navProps.map((navToggle, index) => {
                        return (
                            <li><a key={index} href={navToggle.navlink}>{navToggle.navtoggle}</a></li>
                        );
                    })}
                </ul>
            </div>
        </nav>
      );
}
 
export default NavBar;
