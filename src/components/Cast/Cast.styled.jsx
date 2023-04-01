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
`;
export const CastItem = styled.li`
  display: flex;
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

export const NoCast = styled.p`
  color: #8b00ff;
  font-weight: 500;
  font-size: 20px;
`;