import { useReducer } from "react";
interface reducerType {
  type: string;
  payload: string;
}

interface initialStateType {
  email: string;
  password: string;
}

const initialState: initialStateType = {
  email: "",
  password: "",
};

const reducer = (state, { type, payload }: reducerType) => {
  switch (type) {
    case type:
      return Object.assign({}, state, { [type]: payload });
    default:
      throw new Error();
  }
};

const useLoginScreen = () => {
  const [{ email, password }, dispatch] = useReducer(reducer, initialState);

  const handleChange = (target) => {
    dispatch({ type: target.name, payload: target.value });
  };

  return [email, password, handleChange];
};

export default useLoginScreen;
