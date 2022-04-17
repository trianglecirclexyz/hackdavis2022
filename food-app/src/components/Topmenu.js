import { Navbar } from 'react-bootstrap'

function Topmenu (props) {
    return (
        <Navbar bg="myYellow">
            <a class="navbar-brand" href="https://www.google.com">EATIS</a>

            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    </input>
            </form>

            <span>Profile</span>

            
        </Navbar>
    );

} 

export default Topmenu;