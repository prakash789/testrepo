import {LOGIN_SUCCESS} from '../../Screens/Login/Types';

export default function (state = [], action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
