import { ChangeEventHandler, FormEventHandler, useReducer } from "react";
import axios from "axios";
import { iLogin } from "src/MongoDB/models/userModel";
import { HookNextFunction } from "mongoose";

export interface iState {
  username: string;
  password: string;
  _handleChange?: FormEventHandler<HTMLInputElement>;
  _login?: VoidFunction;
}

interface iAction<T> {
  type: T;
  payload: T;
}

const initialState = {
  username: "",
  password: "",
};

const reducer = (state: iState, { type, payload }: iAction<string>) => {
  switch (type) {
    case type:
      return Object.assign({}, state, { [type]: payload });
    default:
  }
};

const useLogin: HookNextFunction = (): iState => {
  const [{ username, password }, dispatch] = useReducer(reducer, initialState);

  const _handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const _login = async () => {
    try {
      if (username.trim() === "" || password.trim() === "") {
        return console.log("Not spacifed!!");
      }

      const res = await axios.post("/api/test/", <iLogin>{
        username,
        password,
      });
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    username,
    password,
    _handleChange,
    _login,
  };
};

export default useLogin;
