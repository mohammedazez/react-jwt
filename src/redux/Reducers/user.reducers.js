import { REGISTER, LOGIN } from "../Action/user.actions";

// check token
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

// reducers user

const student = (state = initialState, action) => {
  // console.log("tes", action);
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
