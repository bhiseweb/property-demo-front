import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router'

const New = props => 
  <div style={{padding: '20px'}}>
    <div style={{color: 'red'}}>
      {props.errors && props.errors.message.map((err,index) => {
        return <div key={index}>{err}</div>
      })}
    </div>    
    <Form onSubmit={props.onSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" value={props.property.name} placeholder="Property Name" onChange={(e) => props.handleChange(e.target.name, e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="textarea" name="address" value={props.property.address} placeholder="Property Address" onChange={(e) => props.handleChange(e.target.name, e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="noofbedrooms">No Of Bedrooms</Label>
        <Input type="number" name="no_of_bedrooms" value={props.property.no_of_bedrooms} onChange={(e) => props.handleChange(e.target.name, e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="noofbathrooms">No Of Bathrooms</Label>
        <Input type="number" name="no_of_bathrooms" value={props.property.no_of_bathrooms} onChange={(e) => props.handleChange(e.target.name, e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="size">Size (in sqmt)</Label>
        <Input type="text" name="size" value={props.property.size} placeholder= "Property Size in sq mtr" onChange={(e) => props.handleChange(e.target.name, e.target.value)} />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form> 
     {props.fireRedirect && (
      <Redirect to={'/properties'}/>
    )}
  </div>

New.propTypes = {  
  property: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
  };

export default New