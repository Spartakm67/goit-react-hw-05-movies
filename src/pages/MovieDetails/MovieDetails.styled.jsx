import styled from '@emotion/styled'
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  margin: 0;
  color: #155263;
`;
export const MovieBox = styled.div`
  display: flex;
  padding: 20px;
`;
export const MovieData = styled.div`
  padding: 20px 40px;
`;
export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
  font-weight: 500;
  color: #f95959;
`;
export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  font-weight: 500;
  &:hover {
    background-color: #63c5da;
  }
`;

export const LinkBack = styled(Link)`
  display: flex;
  font-size: 14px;
  align-items: center;
  column-gap: 10px;
`;
export const DataBox = styled.div`
  padding: 5px;
`;

export const DataLi = styled.li`
  /* width: 100px;
  height: 25px; */
  &:hover {
    color: #ff9a3c;
  }
`;

export const DataLink = styled(Link)`
  text-decoration: none;
  padding-left: 10px;
  color: black;
  &:hover {
    color: #ff9a3c;
    font-weight: 500;
  }
`;

export const DataImg = styled.img`
  min-width: 300px;
  height: auto;
`;