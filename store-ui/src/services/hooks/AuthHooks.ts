import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authUser, logoutUser } from "../AuthService";

const USER_STORAGE = 'user_storage'

export const useLocalStorage = (keyName: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue: object) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};

export const useAuth = () => {
  const [userLocalStorage, setUserLocalStorage] = useLocalStorage(USER_STORAGE, null)
  const navigate = useNavigate()

  const login = async (username: string, password: string) => {
    const authData = await authUser(username, password)
    setUserLocalStorage(authData)
    navigate(-2)
  }

  const logout = async () => {
    await logoutUser()
    setUserLocalStorage(null)
    navigate('/')
    navigate(0)
  }

  const isLogin = ():boolean => {
    return !!userLocalStorage
  }

  return [userLocalStorage, login, logout, isLogin]
}
