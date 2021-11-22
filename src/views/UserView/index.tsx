import {
  CompositeView,
  CrudMasterDetailView,
  GridView,
  MasterDetailForm
} from '@digital/ui';
import React from 'react';
import { ShowUsersProps, onAllUser, onUserCreate, onDeleteUser } from '../../api/user';
import FormUserView from './FormMasterDetailLogin'

export default () => {
  const filterPredicate = (item: ShowUsersProps, value: string) => {
    return item.Name.toLowerCase().includes(value.toLowerCase());
  };

  return (
    <CrudMasterDetailView
      getAllItems={onAllUser}
      icon="profile-person_male"
      iconDisable="profile-unfriend_male"
      colorDisable="#e05353"
      createItem={onUserCreate}
      deleteItem={onDeleteUser}
      idExtractor={item => item.UserCode}
      filterPredicate={filterPredicate}
      titleExtractor={item => item.Name}
      descriptionExtractor={item => item.Email}>
      <CompositeView>
        <GridView noform>
          <MasterDetailForm>
            <FormUserView dateTime="19/11/2021 5:08" mes={"Novembro"} />
          </MasterDetailForm>
        </GridView>
      </CompositeView>
    </CrudMasterDetailView>
  );
};
