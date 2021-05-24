import {API_AUTH} from '../../Configs/AxiosConfigs';
import {
  handleApi,
  handleApiSuccess,
  handleApiError,
  handleNetworkError,
} from '../ActionConfigs';

// Types

export const Types = {
  AUTH: 'user/AUTH',
  RECOVER_PASS: 'user/RECOVER_PASS',
  LOGOFF_USER: 'user/LOGOFF_USER',
  SET_TOKEN: 'user/SET_TOKEN',
};

// Reducers

const INITIAL_STATE = {
  login_data: {isLoading: false, data: null, error: null},
  recover_data: {isLoading: false, data: null, error: null},
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOGOFF_USER:
      return {
        ...state,
        login_data: {isLoading: false, data: null, error: null},
      };
    case Types.AUTH:
      return {
        ...state,
        login_data: action.payload,
      };
    case Types.RECOVER_PASS:
      return {
        ...state,
        recover_data: action.payload,
      };
    case Types.SET_TOKEN:
      return {
        ...state,
        login_data: {
          isLoading: state.login_data.isLoading,
          response: {
            ...state.login_data.response,
            accessToken: action.token,
          },
          error: state.login_data.error,
        },
      };
    default:
      return state;
  }
};

// Actions

export const authenticate = auth => {
  return async dispatch => {
    try {
      handleApi(true, Types.AUTH, dispatch);
      API_AUTH()
        .post('/login', auth)
        .then(response => {
          handleApiSuccess(response.data.result, Types.AUTH, dispatch);
        })
        .catch(error => {
          if (!error.response) handleNetworkError(dispatch);
          else handleApiError(error.response, Types.AUTH, dispatch);
        });
    } catch (ex) {
      throw ex;
    }
  };
};

export const recoverPass = email => {
  return async dispatch => {
    try {
      handleApi(true, Types.RECOVER_PASS, dispatch);
      API_AUTH()
        .get(`recoverUsuario?email=${email}`)
        .then(response => {
          handleApiSuccess(response.data.message, Types.RECOVER_PASS, dispatch);
        })
        .catch(error => {
          if (!error.response) handleNetworkError(dispatch);
          else handleApiError(error.response, Types.RECOVER_PASS, dispatch);
        });
    } catch (ex) {
      throw ex;
    }
  };
};

export const logoff = () => {
  return async dispatch => {
    dispatch({
      type: Types.LOGOFF_USER,
    });
  };
};
