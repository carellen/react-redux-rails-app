import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

const MapStateToProps = state => {
  return { items: state.companies };
};

const CompaniesList = connect(MapStateToProps)(ItemList);
export default CompaniesList;
