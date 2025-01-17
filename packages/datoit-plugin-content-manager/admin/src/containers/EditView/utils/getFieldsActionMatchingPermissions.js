import { uniq, flatMap } from 'lodash';
import { findMatchingPermissions } from 'datoit-helper-plugin';

const getFieldsActionMatchingPermissions = (userPermissions, slug) => {
  const getMatchingPermissions = action => {
    const matched = findMatchingPermissions(userPermissions, [
      {
        action: `plugins::content-manager.explorer.${action}`,
        subject: slug,
      },
    ]);

    return uniq(flatMap(matched, 'properties.fields'));
  };

  return {
    createActionAllowedFields: getMatchingPermissions('create'),
    readActionAllowedFields: getMatchingPermissions('read'),
    updateActionAllowedFields: getMatchingPermissions('update'),
  };
};

export default getFieldsActionMatchingPermissions;
