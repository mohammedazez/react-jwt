import { REGISTER, LOGIN } from "../Action/user.actions";
const token = localStorage.getItem("token");

const initialState = token
  ? {
      isLogged: true,
      data: [],
    }
  : {
      isLogged: false,
      data: [],
      registerData: [],
    };

const student = (state = initialState, action) => {
  // console.log("testing", action);
  // console.log("data", action.payload);
  switch (action.type) {
    case REGISTER:
      return {
        registerData: action.payload,
      };
    case LOGIN:
      return {
        isLogged: true,
      };
    default:
      return state;
  }
};

export default student;
