import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Thought from "./Thought";

const Thoughts = ({ thoughts }) => {
  return (
    <Row>
      <Col xs={12}>
        <h2>Latest Thoughts</h2>
      </Col>
      {thoughts &&
        thoughts.map(thought => (
          <Col key={thought._id} xs={12} sm={6} md={4} lg={3}>
            <Thought thought={thought} />
          </Col>
        ))}
      {!thoughts && <Col xs={12}>Loading...</Col>}
    </Row>
  );
};

export default Thoughts;
