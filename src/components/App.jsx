import { NavLink, Route, Routes } from "react-router-dom";
import styled from '@emotion/styled';
import Home from "pages/Home/Home";
import Collection from "pages/NotFound/NotFound";
import { getTrendingMovies, getMovies } from "../services/getDATA";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {

  console.log(getTrendingMovies());
  console.log(getMovies('babylon'));

  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
          </li>
        <li>
          <StyledLink to="/cats">Collection</StyledLink>
          </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Collection />} />
        <Route path="/cats/:catId" element={<>Collection element</>} />
      </Routes>
    </div>
  );
};
