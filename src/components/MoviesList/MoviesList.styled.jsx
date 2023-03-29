import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieName = styled.p`
  padding: 2px;
  margin-top: 4px;
  margin-bottom: 0;
  color: #38598b;
  margin-bottom: 0;
`;

export const MovieLink = styled(Link)`
  
&:hover {
text-decoration: none;
color: #ff9a3c; 
  }
`;
export const MovieLi = styled.li`
 
  &:hover {

    color: #ff9a3c;
    /* border-radius: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5); */
  }
  
`;