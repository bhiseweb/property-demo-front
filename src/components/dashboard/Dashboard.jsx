import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, Row, Col } from 'reactstrap';
import Map from './Map';

const Dashboard = (props =>
  <div>
    <Row>
      <Col sm="4">
        <Card body>
          <CardBody>
            <CardTitle>No of Properties</CardTitle>
            <CardText>{props.stats.no_of_properties || 0}</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardBody>
            <CardTitle>Average Size</CardTitle>
            <CardText>{props.stats.average_size || 0} sqmt</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Map markers={props.stats.markers} />
  </div>)

export default Dashboard;