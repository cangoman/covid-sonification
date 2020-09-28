export const SET_COUNTRY_DATA = 'SET_COUNTRY_DATA';

const dataReducer = (state, action) => {
  const actions = {
    SET_COUNTRY_DATA: {
      ...state,
      countries: action.data
    },
  };

  return actions[action.type] || state;
};

export default dataReducer;