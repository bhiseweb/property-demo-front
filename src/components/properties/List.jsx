import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

const List = props =>
  <div>
    <Table>
      <thead>
        <tr>
          <th>Property Name</th>
          <th>Address</th>
          <th>No of Bedrooms</th>
          <th>No of Bathrooms</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
       {props.properties.map(property => (
          <tr key={property.id}>
            <td>{property.name}</td>
            <td>{property.address}</td>
            <td>{property.no_of_bedrooms}</td>
            <td>{property.no_of_bathrooms}</td>
            <td>{property.size} sqmt</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>

List.propTypes = {
  properties: PropTypes.array.isRequired
};

export default List;