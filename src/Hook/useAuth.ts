import { useContext, createContext } from "react";
// import { auth } from "Firebase";
// interface Register {
//   email: string;
// }
// interface resuluCheckEmail {
//   registered: boolean;
// }

// const authContext =createContext({})

// const useAuth = () => {
//   const checkEmail = async (email: string) => {
//     const result = await auth.fetchSignInMethodsForEmail(email).then((res) => {
//       let resuluCheckEmail: resuluCheckEmail = { registered: !!res.length };
//       return resuluCheckEmail;
//     });
//     return result;
//   };

//   const register = async ({ email }: Register) => {
//     const { registered } = await checkEmail(email);
//     if (!registered) {
//       let actionCodeSettings = {
//         url: "http://localhost:3000",
//         handleCodeInApp: true,
//         iOS: {
//           bundleId: "com.example.ios",
//         },
//         android: {
//           packageName: "com.example.android",
//           installApp: true,
//           minimumVersion: "12",
//         },
//       };

//       await auth.sendSignInLinkToEmail(email, actionCodeSettings);
//       alert(`Login link sent to ${email}`);
//     }
//   };

//   return {
//     register,
//     checkEmail,
//   };
// };

// export default useAuth;
