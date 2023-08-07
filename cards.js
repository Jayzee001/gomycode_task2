import Card from 'react-bootstrap/Card';
import './cards.css'

const Cardie = () => {
  return (
      <>
          <div className='card'>
    <div className='hold'>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/236x/7e/cf/ef/7ecfefa732072d88dd292185535583d4.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card></div>
          <br />
    <div className='hold'>
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://i.pinimg.com/236x/83/00/4d/83004d826b3f1913baadb5104ff0964a.jpg"  alt="foto"/>
          </Card></div>
              <div className='hold'>
        <Card className="bg-dark text-white">
                      <Card.Img style={{height:'100%', width:'100%'}} src="https://i.pinimg.com/236x/f0/ad/cf/f0adcfdc5a372181f4358be3cb330af2.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
              </Card></div>
              </div>

    </>
  );
}

export default Cardie;