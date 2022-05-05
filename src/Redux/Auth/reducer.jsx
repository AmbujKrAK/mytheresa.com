import { LOGIN_TOGGLE } from "./action";

const init = {
   email: "",
   isLoggedin: false,
};

export const reducer = (store = init, { type, payload }) => {
   switch (type) {
      case LOGIN_TOGGLE:
         return {
            ...store,
            email: payload.username,
            isLoggedin: payload.isLoggedin,
         };
      default:
         return store;
   }
};
