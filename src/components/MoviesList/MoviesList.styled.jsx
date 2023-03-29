import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
`;

export const MovieLink = styled(Link)`
  
&:hover {
text-decoration: none;
}
`;

export const MovieLi = styled.li`
 
  &:hover {
    color: #ff9a3c;
  }
`;