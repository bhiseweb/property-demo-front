import React, { Component } from 'react';
import New from '../../components/properties/New';
import { createProperty } from '../../actions/property.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class NewContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      property: {name: '', address: '', no_of_bedrooms: 0, no_of_bathrooms: 0, size: 0},
      fireRedirect: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState({ ...this.state, property: {...this.state.property, [key]: value} });
  }

  async onSubmit(e) {
    e.preventDefault();
    const { property } = this.state;
    await this.props.createProperty(property);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps && nextProps.property) {
      this.setState({fireRedirect: true });
    }
  }
   
  render() {
    const { fireRedirect, property } = this.state;
    const { errors } = this.props;
    return <New handleChange={this.handleChange} onSubmit={this.onSubmit} 
    property={property}
    fireRedirect={fireRedirect} 
    errors={errors} />;
  }
}

const mapStateToProps = state => ({
  property: state.property.property,
  errors: state.property.errors
});

const mapDispatchToProps = dispatch => bindActionCreators({ createProperty }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewContainer)