import Container from "react-bootstrap/Container";
import fetch from "isomorphic-fetch";
import Thoughts from "../components/Thoughts";

const Index = ({ thoughts }) => {
  return (
    <Container>
      <Thoughts thoughts={thoughts} />
    </Container>
  );
}

Index.getInitialProps = async ({ req }) => {
  const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
  const res = await fetch(`${baseURL}/api/thoughts`);
  return {
    thoughts: await res.json()
  };
};

export default Index;
