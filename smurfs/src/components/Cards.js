import React, { useContext } from "react";
import { Row, Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

import { SmurfContext } from "../contexts";
import SingleCard from "./SingleCard";

export default function Cards() {
  const smurfs = useContext(SmurfContext);

  return (
    <>
      <Row>
        {console.log(smurfs)}
        {smurfs.map((smurf, index) => {
          return <SingleCard smurf={smurf} key={index} />;
        })}
      </Row>
      <Row>
        <Col sm={12} md={{ size: 6, offset: 3 }}>
          <Form className='bg-smurf p-4'>
            <FormGroup>
              <Label for='name'>Smurf Name</Label>
              <Input type='text' name='name' id='name' />
            </FormGroup>
            <FormGroup>
              <Label for='age'>Smurf Age (number only please)</Label>
              <Input type='text' name='age' id='age' />
            </FormGroup>
            <FormGroup>
              <Label for='height'>Smurf Height (include cm after number)</Label>
              <Input type='text' name='height' id='height' />
            </FormGroup>
            <Button color='primary'>Add Me</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
