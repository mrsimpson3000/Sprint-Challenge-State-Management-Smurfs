import React from "react";
import { Card, CardHeader, CardBody, Col, CardText, Button } from "reactstrap";

export default function SmurfCard(props) {
  return (
    <Col xs='12' sm='6' md='4' xl='3' className='p-4'>
      <Card>
        <CardBody className='bg-smurf'>
          <CardHeader className='text-center'>
            {props.smurf.name} Smurf
          </CardHeader>
          <CardText className='text-center pt-2'>
            {props.smurf.age} years old
          </CardText>
          <CardText className='text-center'>{props.smurf.height} tall</CardText>
          <Button className='ml-3' color='primary'>
            Edit
          </Button>
          <Button className='ml-3' color='danger'>
            Delete
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}
