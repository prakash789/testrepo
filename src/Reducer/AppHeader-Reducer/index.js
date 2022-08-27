import {DYNAMIC_TITLE_LOADED} from '../../Components/AppHeader/Types';

export default function (state = [], action) {
  switch (action.type) {
    case DYNAMIC_TITLE_LOADED:
      return action.payload;
    default:
      return state;
  }
}
