function NavBar(props){

    return(
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-flex">
                <i onClick={props.onProfileClick} className="bi bi-person-circle"></i>   
                <a onClick={props.onLogoClick} className="navbar-brand">                      
                    INICIO                    
                </a>
                </div>
            </nav>
      </div>
    );
}

export default NavBar;