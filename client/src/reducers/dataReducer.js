export const SET_USERS = 'SET_USERS';
export const SET_COUNTRY_DATA = 'SET_COUNTRY_DATA';

const dataReducer = (state, action) => {
  const actions = {
    SET_USERS: {
      ...state,
      users: action.users,
      loading: false,
    },
    SET_COUNTRY_DATA: {
      ...state,
      countries: action.data
    }
  };

  return actions[action.type] || state;
};

export default dataReducer;