"use client";
import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthWrapper({ children }) {
  const [globalLogin, setGlobalLogin] = useState({
    tokens: null,
    login: null,
    username: null, // Add username to the state
  });

  async function login(data) {
    try {
      const url = process.env.NEXT_PUBLIC_API_URL+"api/token/";
      const res = await axios.post(url, data);
      const username = data.username; 
      setGlobalLogin((prev) => ({
        ...prev,
        tokens: res.data,
        username: username, 
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
