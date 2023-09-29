function Salir(){
    localStorage.removeItem('token');
    window.location.reload();
}

function NavBar(props){    

    return(
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-flex" style={{ display: 'flex'}}>
                <i onClick={props.onProfileClick} className="bi bi-person-circle"></i>   
                <a onClick={props.onLogoClick} className="navbar-brand">                      
                    INICIO                    
                </a> 
                <button type="button" className="btn btn-dark" onClick={Salir}><i className="bi bi-box-arrow-left"></i> SALIR</button>
                </div>
            </nav>
      </div>
    );
}

export default NavBar;