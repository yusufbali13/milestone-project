import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const values = { userData, setUserData };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export default AuthContextProvider;
