import 'bootstrap/dist/css/bootstrap.min.css'
import {Card,Container} from 'react-bootstrap'
import './App.css';
import Name from './name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = "";

function App() {
  return (
    <Container className='container'>
      <Card className="card">
        <Image className='img'/>
        <Card.Body>
          <Card.Title><Name/></Card.Title>
          <Card.Text className='cardText'>
            <Price />
            <Description/>
          </Card.Text>
        </Card.Body>

      </Card>
      <div className='message'>
        {firstName?(
          <>
            <h2>Hello,{firstName}!</h2>
          </>
        ):(
        <h2>Hello, there!</h2>
        )}
      </div>
    </Container>
    
  );
}

export default App;
