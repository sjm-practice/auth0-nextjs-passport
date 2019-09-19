import Card from 'react-bootstrap/Card';

const Thought = ({thought}) => {
  const cardStyle = { marginTop: "15px" };

  return (
    <Card bg="secondary" text="white" style={cardStyle}>
      <Card.Body>
        <Card.Title>{thought.message}</Card.Title>
        <Card.Text>by {thought.author}</Card.Text>
      </Card.Body>
    </Card>
  );

};

export default Thought;
