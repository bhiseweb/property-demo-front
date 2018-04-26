import React, { Component } from 'react';
import List from '../../components/properties/List';
import { fetchProperties } from '../../actions/property.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ListContainer extends Component {
  
  componentDidMount() {
    this.props.fetchProperties();  
  }
  
  render() {
    const { properties } = this.props;
    return <List properties={properties} />;
  }

}

const mapStateToProps = state => ({
  properties: state.property.properties
});

  const mapDispatchToProps = dispatch => bindActionCreators({ fetchProperties }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)