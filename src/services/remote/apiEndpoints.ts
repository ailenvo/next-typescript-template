const AUTH_PATH = "/auth";
const USER_PATH = "/accounts";

const AUTH = {
  LOGIN_WITH_PASSWORD: {
    url: `${AUTH_PATH}/login`,
  },
  ADMIN_LOGIN_WITH_PASSWORD: {
    url: `${AUTH_PATH}/adminlogin`,
  },
  LOGOUT: {
    url: `${AUTH_PATH}/logout`,
  },
};

const USER = {
  CREATE: {
    url: `${USER_PATH}/create`,
  },
  GET_SIGNLE: {
    url: `${USER_PATH}/info`,
  },
  UPDATE_PASSWORD: {
    url: `${USER_PATH}/Update`,
  },
  GET_USERS: {
    url: `${USER_PATH}/gets`,
  },
  UPDATE_STATUS: {
    url: `${USER_PATH}/UpdateIsDelete`,
  },
};

const ApiEndpoints = {
  AUTH,
  USER,
};

export default ApiEndpoints;
