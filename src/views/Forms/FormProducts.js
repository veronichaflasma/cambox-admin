import React,{useState,useEffect} from "react";
import {storage} from "../../firebase/firebase"

import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form
  
} from "shards-react";


const ProductsForm = (props) =>{

  const initialFileValues = {
          name: '',
          price: '',
          product_date: '',
          stock: '',
          img:'',
          disc:'',
          desc:''

      }
  
      var [values,setValues] = useState(initialFileValues)
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  
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
  
  const handleInputChange = (e)=>{
      var {name,value}= e.target
      var {name,value}= e.target
      if(e.target.files) {
        const fileName = new Date().getTime() + e.target.files[0].name
        const uploadTask = storage.ref(`item_image/${fileName}`).put(e.target.files[0]);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => {
            storage.ref(`item_image/${fileName}`)
            .getDownloadURL()
            .then(url => {
              setValues({ 
                ...values,
                [name]: fileName
              })
              setUrl(url)
            });
          }
        );
      }else{
        setValues(
            {
                ...values,
                [name]: value,
                
                
            }
        )
      }

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
                      placeholder="Product Name" 
                      name="name" value={values.name}                        
                      onChange = {handleInputChange}/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                      placeholder="Price" type="number"
                      name="price" value={values.price}
                      onChange = {handleInputChange}/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                      placeholder="Dicount" type="number"
                      name="disc" value={values.disc}
                      onChange = {handleInputChange}/>
              </div>
            </div>
            <div className="form-row">
            <progress value={progress} max="100"/>
              <div className="form-group input-group">
                <input className="form-control"  type="file"
                      placeholder="image" 
                      name="img"
                      onChange = {handleInputChange}/>
                      {/* {url}
                      <img src={url || "http://via.placeholder.com/100"} alt="firebase-image" /> */}
              <div>
              </div>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                      placeholder="stock" type="number"
                      name="stock" value={values.stock}
                      onChange = {handleInputChange}/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                        placeholder="10-11-2020" type="date"
                        name="product_date" value={values.product_date}
                        onChange = {handleInputChange}/>
              </div>
            </div>
         
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                      placeholder="description" 
                      name="desc" value={values.desc}
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
  
export default ProductsForm;
