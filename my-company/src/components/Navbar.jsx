import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <div style={{ backgroundColor: "black", display: "flex", justifyContent:"space-between", position:"fixed", top:"0", width:"100%"}}>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/services' >Services</Link>
            <Link to='/contact' >Contact</Link>
        </div>
     );
}

export default Navbar;