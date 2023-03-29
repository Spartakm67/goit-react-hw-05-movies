import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
// import styled from '@emotion/styled';
import { SharedLayout } from "./SharedLayout/SharedLayout";


const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Reviews = lazy(() => import("./Reviews"));
// const Cast = lazy(() => import("./Cast"));




export const App = () => {

  return (
   <div>
            
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        {/* <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
      
  </div>
  );
};
