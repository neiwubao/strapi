import React from 'react';
import { CheckPagePermissions } from 'datoit-helper-plugin';
import adminPermissions from '../../../permissions';
import ListPage from '../ListPage';

const ProtectedListPage = () => (
  <CheckPagePermissions permissions={adminPermissions.settings.users.main}>
    <ListPage />
  </CheckPagePermissions>
);

export default ProtectedListPage;
