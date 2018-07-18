import React from 'react';
import CompaniesList from '../containers/CompaniesList'
import CompanyForm from '../containers/CompanyForm'

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
    <h2>Companies</h2>
      <CompanyForm />
      <CompaniesList />
    </div>
  </div>
);

export default App;
