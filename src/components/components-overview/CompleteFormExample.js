import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";

const CompleteFormExample = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
          <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">Product Name</label>
                <FormInput id="feInputCity" />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputCity">Price</label>
                <FormInput id="feInputCity" />
              </Col>
              <Col md="2" className="form-group">
                <label htmlFor="feInputZip">QTY</label>
                <FormInput id="feInputZip" />
              </Col>
            </Row>

    

            <FormGroup>
              <label htmlFor="feInputAddress">Image</label>
              <FormInput id="feInputAddress"  />
            </FormGroup>


            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">Date</label>
                <FormInput id="feInputCity" />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputState">State</label>
                <FormSelect id="feInputState">
                  <option>Choose...</option>
                  <option>...</option>
                </FormSelect>
              </Col>
              <Col md="2" className="form-group">
                <label htmlFor="feInputZip">Discount</label>
                <FormInput id="feInputZip" />
              </Col>
              
            </Row>
            <Button type="submit">Submit </Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default CompleteFormExample;
