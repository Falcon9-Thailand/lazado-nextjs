import { useReducer } from "react";
import { useRouter } from "next/router";
import { useAuth } from "src/Firebase/firebaseAuth";
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
  const auth: any = useAuth();
  const router = useRouter();
  const handleChange = (target) => {
    dispatch({ type: target.name, payload: target.value });
  };

  console.log(auth.user);

  const onSignIn = async () => {
    await auth.signin({ email, password }).then(() => {
      router.push("/");
    });
  };

  return { email, password, handleChange, onSignIn };
};

export default useLoginScreen;
