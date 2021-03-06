
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;
    const Navigate = useNavigate()
    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        Navigate(path);
    }
    return (
        <div>
            <h3>Name:{name}</h3>
            <Link to={'/friend/' + id}>Friend Details:{id}</Link>
            <button onClick={showFriendDetail} >{username}:{id}</button>
        </div>
    );
};

export default Friend;