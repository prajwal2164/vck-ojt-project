import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
  return(
    <div>
        <header>

          
            <nav>
                  
                <h2 align="right">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/admision"><font color="Green"><button>Apply Now</button></font></Link></h2>
              

                </nav>
          </header>
    </div>
  )
}

export default Header;