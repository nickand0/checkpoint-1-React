//importation bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card,Container} from 'react-bootstrap'

//importation css
import './App.css';

//importation name
import Name from './name';

//importation prix
import Price from './Price';
//importation description

import Description from './Description';

//importation image
import Image from './Image';

//mon nom
const firstName = "Nikki";

//fonction app
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
