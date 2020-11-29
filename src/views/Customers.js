import React,{useState,useEffect} from "react";
import FormCustomers from "./Forms/FormCustomers"
import firebaseDb from '../firebase/firebase'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,

  CardBody
} from "shards-react";

import PageTitle from "../components/common/PageTitle";


const Customers = () =>{

  var [contactObjects,setContactObjects] = useState({})
  //implement form
  var [currentId,setCurrentId] = useState('')

  useEffect(()=>{
      firebaseDb.child('Account').on('value',snapshot =>{
          if(snapshot.val()!= null)
              setContactObjects({
                  ...snapshot.val()
              })
          else
              setContactObjects({}) // refresh after delete
      })
  },[])
    

  const addOrEdit = obj => {
      if(currentId=='')
          firebaseDb.child('Account').push(
              obj,
              err =>{
                  if(err)
                      console.log(err)
                      else
                      setCurrentId('')
              }
          )
      else
          firebaseDb.child(`Account/${currentId}`).set(
              obj,
              err =>{
                  if(err)
                      console.log(err)
                  else
                      setCurrentId('')
              }
          )
  }

  const onDelete = key=>{
      if(window.confirm('Are u sure delete this record?')){
          firebaseDb.child(`Account/${key}`).remove(
           
              err =>{
                  if(err)
                      console.log(err)
                  else
                      setCurrentId('')
              }
          )
      }
  }
  return(
    <div>
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Products"
            subtitle="Overview"
            className="text-sm-left"
          />
        </Row>
        <Row>
          <Col lg="4" className="mb-4">
            {/* Complete Form Example */}
            <Card small>
              <CardHeader className="border-bottom">
                <h6 className="m-0">Form Customers</h6>
              </CardHeader>
              <FormCustomers {...({addOrEdit,currentId,contactObjects})}/>
            </Card>
          </Col>
          <Col lg="8" className="mb-4">
              <Card small >
                <CardBody className="p-0 pb-3">
                  <table className="table mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th scope="col" className="border-0">
                          #
                        </th>
                        <th scope="col" className="border-0">
                          Name
                        </th>
                        <th scope="col" className="border-0">
                          email
                        </th>
                        <th scope="col" className="border-0">
                          password
                        </th>
                        <th scope="col" className="border-0">
                          phone
                        </th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      {
                        Object.keys(contactObjects).map(id=>{
                        return  <tr key={id}>
                                  <td></td>
                                  <td>{contactObjects[id].name}</td>
                                  <td>{contactObjects[id].email}</td>
                                  <td>{contactObjects[id].password}</td>
                                  <td>{contactObjects[id].phone}</td>
                                  <td>
                                    <a className="btn text-primary" onClick= {() => {setCurrentId(id)}}>
                                      <i className="fas fa-pencil-alt"></i>
                                    </a>
                                  </td>
                                  <td>
                                      <a className="btn text-danger" onClick={()=> {onDelete(id)}}>
                                          <i className="fas fa-trash-alt"></i>
                                      </a>
                                  </td>
                                </tr>
                        })
                      }
                    </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Customers;
