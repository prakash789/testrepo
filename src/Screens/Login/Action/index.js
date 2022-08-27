import {LOGIN_SUCCESS} from '../Types';

export const doLoginAction = apiResponse => async dispatch => {
  dispatch({type: LOGIN_SUCCESS, payload: apiResponse});
};
