import React from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
    CardGroup,
    CardImg
} from "reactstrap";
import axios from 'axios';
import baseurl from '../API/BootAPI';

const Book = ({book,update}) => {

  const deleteBk = (id) => {
    axios.delete(`${baseurl}/books/${id}`).then (
      (response) => {
        console.log("Deleted");
        update(id);
      } ,
      (error) => {
        console.log("Not Deleted")
      }
    )
  }


    return (
        
        <Card
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="Sample"
          src="https://picsum.photos/300/200"
        />
        <CardBody>
          <CardTitle tag="h5">
            {book.bkname} {book.id}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Available ? :{book.avail}
          </CardSubtitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Price :{book.price}
          </CardSubtitle>
          <CardText>
            Condition : {book.condi}
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <Button color='primary' onClick={ ()=> {
            deleteBk(book.id)
          } } >
            Delete
          </Button>

          <Button color='warning' style={{ marginLeft: '10px' }}>
            Update
          </Button>
        </CardBody>
      </Card>
    );
}

export default Book