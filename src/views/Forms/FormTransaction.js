import React,{useState,useEffect} from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form
  
} from "shards-react";


const FormTransaction = (props) =>{
  const initialFileValues = {
          item_key: '',
          order_date: '',
          total: '',
          received_date: ''

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
              <div className="form-group input-group">
                <input className="form-control" 
                      placeholder="Item Key" 
                      name="item_key" value={values.item_key}                        
                      onChange = {handleInputChange}/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                      placeholder="Order Date" 
                      name="order_date" value={values.order_date}
                      onChange = {handleInputChange}/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control"
                      placeholder="price total" 
                      name="total" value={values.total}
                      onChange = {handleInputChange}/>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                      placeholder="received date" 
                      name="received_date" value={values.received_date}
                      onChange = {handleInputChange}/>
              </div>
            </div>
   
            <div className="form-row">
                <div className="form-group">
                    <input type="submit" value={props.currentId==''?"Save":"Update"} className="btn btn-primary btn-block"/>
                </div>
            </div>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>

    

  )
}
  
export default FormTransaction;
