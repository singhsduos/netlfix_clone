import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 30px;
  margin: auto;
 background-color: var(--main-color);
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }

  @media (max-width:368px){
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
   display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: flex-start;

  @media (max-width: 700px) {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;

  width: 9rem;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;