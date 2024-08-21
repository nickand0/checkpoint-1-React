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
        <Image/>
        <Card.Body style={{color:'white'}}>
          <Card.Title style={{textAlign:'center'}}><Name/></Card.Title>
          <div style={{borderBottom:'solid',borderColor:'gray',marginBottom:'20px',marginTop:'20px'}}></div>
          <Card.Text className='cardText'>
          <strong ><Price/></strong>
            <Description/>
          </Card.Text>
        </Card.Body>

      </Card>
      <div className='message'>
        {firstName?(
          <>
            <h1>Hello,{firstName}!</h1>
          </>
        ):(
        <h1>Hello, there!</h1>
        )}
      </div>
    </Container>
    
  );
}

export default App;
