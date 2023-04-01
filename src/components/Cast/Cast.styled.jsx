import styled from '@emotion/styled';

export const CastList = styled.ul`
list-style: none;
display: grid;
max-width: 1800px;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
grid-auto-rows: 300px;
grid-gap: 12px;
justify-content: center;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
/* display: flex;
  justify-content: flex-start;
  padding: 25px;
  padding-right: 35px;
  margin-left: 10px;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 65px; */
`;
export const CastItem = styled.li`
  
  /* margin: 10px 0 16px;
  padding: 2px 8px; */
  display: flex;
  /* width: 200px; */
  flex-direction: column;
  margin-bottom: 15px;

  `;
export const Name = styled.h3`
  margin: 8px 0;
`;
export const Character = styled.p`
  margin: 0;
`;

export const CastImg = styled.img`
  width: 150px;
`;