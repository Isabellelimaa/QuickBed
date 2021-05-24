import {UserTypes} from './UserReducers';
import {TOKEN_API} from '../Configs/AxiosConfigs';

export const handleApiSuccess = (response, type, dispatch) => {
  dispatch({
    type,
    payload: {isLoading: false, response, error: null},
  });
};

export const handleApiError = (error, type, dispatch) => {
  dispatch({
    type,
    payload: {isLoading: false, response: null, error: error.data},
  });
};

export const handleApi = (isLoading, type, dispatch) => {
  dispatch({
    type,
    payload: {isLoading: isLoading, response: null, error: null},
  });
};

export const handleNetworkError = (type, dispatch) => {
  dispatch({
    type,
    error: null,
  });
};

export const setToken = (cdCliente, dispatch) => {
  TOKEN_API()
    .get('refreshTokenCliente?cdCliente=' + cdCliente)
    .then(response => {
      dispatch({
        type: UserTypes.SET_TOKEN,
        token: response.data.result,
      });
    })
    .catch(error => {
      setTokenError(UserTypes.SET_TOKEN, dispatch);
    });
};

export const setTokenError = (type, dispatch) => {
  dispatch({
    type,
    token: null,
  });
};
