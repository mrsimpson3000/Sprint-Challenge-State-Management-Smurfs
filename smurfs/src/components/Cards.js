import React, { useContext } from "react";
import { Row, Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

import { SmurfContext, FormContext } from "../contexts";
import SingleCard from "./SingleCard";

export default function Cards() {
  const smurfs = useContext(SmurfContext);
  const formValues = useContext(FormContext);
  const onInputChange = useContext(FormContext);
  const onFormSubmit = useContext(FormContext);

  // console.log({ formValues });

  return (
    <>
      <Row>
        {console.log(smurfs)}
        {smurfs.map((smurf, index) => {
          return <SingleCard smurf={smurf} key={index} />;
        })}
      </Row>
      <Row className='pt-5 pb-5'>
        <Col sm={12} md={{ size: 6, offset: 3 }}>
          <Form onSubmit={onFormSubmit} className='bg-smurf p-4'>
            <FormGroup>
              <Label for='name'>Smurf Name</Label>
              <Input
                onChange={onInputChange}
                type='text'
                name='name'
                id='name'
                value={formValues.name}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for='age'>Smurf Age (number only please)</Label>
              <Input
                onChange={onInputChange}
                type='text'
                name='age'
                id='age'
                value={formValues.age}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for='height'>Smurf Height (include cm after number)</Label>
              <Input
                onChange={onInputChange}
                type='text'
                name='height'
                id='height'
                value={formValues.height}
                required
              />
            </FormGroup>
            <Button color='primary'>Add Smurf</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
