
import { } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>welcome to my fancy website</h1>
            <nav className='nav'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friend">Friend</CustomLink>
                <CustomLink to="/aboutUs">about Us</CustomLink>
            </nav>
        </div>
    );
};

export default Header;