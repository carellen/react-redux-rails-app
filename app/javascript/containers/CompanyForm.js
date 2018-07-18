import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddForm from '../components/AddForm';
import { addCompany } from '../actions/index';

const MapDispatchToProps = dispatch => {
  return {
    onSubmit: (company) => {
      dispatch(addCompany(company));
    }
  };
};

const CompanyForm = connect(null, MapDispatchToProps)(AddForm);
export default CompanyForm;
