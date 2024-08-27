import Spinner from 'react-bootstrap/Spinner';

function SpinnerB() {
  return (
    <Spinner animation="border" variant="warning">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerB;