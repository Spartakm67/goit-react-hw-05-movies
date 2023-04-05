import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieName = styled.p`
  padding: 2px;
  margin-top: 4px;
  margin-bottom: 0;
  color: #38598b;
  margin-bottom: 0;

  &:hover {
    color: #ff9a3c; 
    font-weight: 500;
  }

  &.active {
    color: #f95959;
    background-color: orangered;
}
`;

export const MovieLink = styled(NavLink)`
  
&:hover {
text-decoration: none;
}

&.active {
    color: #f95959;
    background-color: orangered;
}
`;

export const MovieLi = styled.li`
 
  &:hover {
    color: #ff9a3c;
  }
`;

// export const movieNavLink = styled(NavLink)`
//   &.active {
//     color: orange;
//   }

// `;