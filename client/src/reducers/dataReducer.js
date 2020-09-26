export const SET_USERS = 'SET_USERS';

const dataReducer = (state, action) => {
  const actions = {
    SET_USERS: {
      ...state,
      users: action.users,
      loading: false,
    },
  };

  return actions[action.type] || state;
};

export default dataReducer;