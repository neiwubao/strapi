import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { IcoContainer } from 'strapi-helper-plugin';

import CustomInputCheckbox from '../CustomInputCheckbox';

import { ActionContainer, Truncate, Truncated } from './styledComponents';

function Row({ isBulkable, row, headers }) {
  return (
    <>
      {isBulkable && (
        <td onClick={e => e.stopPropagation()} key="i">
          <CustomInputCheckbox name={row.id} onChange={() => {}} value />
        </td>
      )}
      {headers.map(header => {
        //

        return (
          <td key={header.name}>
            <Truncate>
              <Truncated>{row[header.name]}</Truncated>
            </Truncate>
          </td>
        );
      })}
      <ActionContainer>
        <IcoContainer
          icons={[
            { icoType: 'pencil', onClick: () => {} },
            {
              id: row.id,
              icoType: 'trash',
              onClick: () => {},
            },
          ]}
        />
      </ActionContainer>
    </>
  );
}

Row.propTypes = {
  headers: PropTypes.array.isRequired,
  isBulkable: PropTypes.bool.isRequired,
  row: PropTypes.object.isRequired,
};

export default memo(Row);
