"use client";
import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthWrapper({ children }) {
  const [globalLogin, setGlobalLogin] = useState({
    tokens: null,
    login: null,
  });

  async function login(data) {
    try {
      const url = "http://localhost:8000/api/token/";
      const res = await axios.post(url, data);
      setGlobalLogin((prev) => ({
        ...prev,
        tokens: res.data,
      }));
      console.log(res.data);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  }

  return (
    <AuthContext.Provider value={{ ...globalLogin, login, setGlobalLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
