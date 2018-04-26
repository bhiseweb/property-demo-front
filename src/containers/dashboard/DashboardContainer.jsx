import React, { Component } from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import { fetchStats } from '../../actions/property.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DashboardContainer extends Component {
  
  componentDidMount() {
    this.props.fetchStats();  
  }
  
  render() {
    const { stats } = this.props;
    return <Dashboard stats={stats} />;
  }
}

const mapStateToProps = state => ({
  stats: state.property.stats
});

  const mapDispatchToProps = dispatch => bindActionCreators({ fetchStats }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)