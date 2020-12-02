import React,{useState,useEffect} from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  Button
  
} from "shards-react";


const MitraForm = (props) =>{
  const initialFileValues = {
          name: '',
          price: ''

      }
  
      var [values,setValues] = useState(initialFileValues)
  
      //editform
  useEffect(()=>{
      if(props.currentId == '')
          setValues({
              ...initialFileValues
          })
      else
          setValues({
              ...props.contactObject
          })
  },[props.currentId, props.contactObject])
  
  const handleInputChange = e =>{
      var {name,value}= e.target
      setValues(
          {
              ...values,
              [name]: value
          }
      )
  }    
  
  const handleFormSubmit = e =>{
      e.preventDefault();
      props.addOrEdit(values)
  }
  return(
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form autoComplete="off" onSubmit={handleFormSubmit}>
          <div className="form-row">
              <div className="form-group input-group md-col-12">
                <input className="form-control" 
                      placeholder="ex : JNT" 
                      name="name" value={values.name}
                      onChange = {handleInputChange}/>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group input-group col-md-6">
                <input className="form-control " 
                      placeholder="price" 
                      name="price" value={values.price}
                      onChange = {handleInputChange}/>
              </div>
            </div>
                    
            <div className="form-row">
                <div className="form-group">
                    {/* <input  className="btn btn-primary btn-block"/> */}
                    <Button theme="accent" type="submit" value={props.currentId==''?"Save":"Update"}>Save</Button>
                </div>
            </div>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>

    

  )
}
  
export default MitraForm;
