import styled from "styled-components";

const Rocket = styled.div`
  text-align: center;
  img {
    width: 630px;
  }
`;

function Index() {
  return (
    <Rocket>
      <img src="/static/images/blueberry_smoothie_sm.jpg" />
    </Rocket>
  );
}

export default Index;
