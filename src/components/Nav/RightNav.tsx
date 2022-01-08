import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { logoutUser } from "../../redux/actions";


type openType = {
    open: boolean;
}





const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 1px 20px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }: openType) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding: 18px 20px;
    }
  }
`;

const RightNav = ({ open }: openType) => {
  const {isAuth} = useSelector((store: RootState) => ({isAuth: store.auth.isAuth}))
  const {user} = useSelector((store: RootState) => ({user: store.auth.user.data}))
  const dispatch = useDispatch();

  const handleLogout = () => {
     dispatch(logoutUser())
  }

  return (
    <Ul open={open}>
      
      <Link to="/"><li>Home</li></Link>
      <Link to="/"><li>About Us</li></Link>
      <Link to="/result"><li>Result</li></Link>
      {!isAuth && <><Link to="/login"><li>Sign In</li></Link>
      <Link to="/register"><li>Sign Up</li></Link></>}
      {isAuth && <Link to="#" onClick={handleLogout}> <li>{user.name}(Logout)</li></Link>}
    </Ul>
  )
}

export default RightNav