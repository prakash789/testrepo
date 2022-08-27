import {DYNAMIC_TITLE_LOADED} from './Types';

export const doloadGlobalTitle = apiResponse => async dispatch => {
  dispatch({type: DYNAMIC_TITLE_LOADED, payload: apiResponse});
};
