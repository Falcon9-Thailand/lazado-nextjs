import { auth } from "src/Firebase";

interface Register {
  username: string;
  password: string;
}
interface resuluCheckEmail {
  registered: boolean;
}

const useAuth = () => {
  const checkEmail = async ({ email }) => {
    const result = await auth.fetchSignInMethodsForEmail(email).then((res) => {
      let resuluCheckEmail: resuluCheckEmail = { registered: !!res.length };
      return resuluCheckEmail;
    });
    return result;
  };

  const register = async ({ username, password = "" }: Register) => {
    const { registered } = await checkEmail({ email: username });
    console.log(registered);
  };

  return {
    register,
    checkEmail,
  };
};

export default useAuth;
