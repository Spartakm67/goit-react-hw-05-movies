import { Route, Routes } from "react-router-dom";
// import styled from '@emotion/styled';
import Home from "pages/Home/Home";
import Collection from "pages/NotFound/NotFound";
import { SharedLayout } from "./SharedLayout/SharedLayout";

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {

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
      {/* <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
          </li>
        <li>
          <StyledLink to="/cats">Collection</StyledLink>
          </li>
      </ul> */}
      
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="cats" element={<Collection />} />
        <Route path="cats/:catId" element={<>Collection element</>} />
      </Route>
      </Routes>
      
    </div>
  );
};
