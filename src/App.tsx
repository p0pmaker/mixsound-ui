import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Welcome } from "./screens/Welcome";
import { Login } from "./screens/Login";
import { Cadastro } from "./screens/Cadastro";
import { ForgotPassword } from "./screens/ForgotPassword";
import { ResetPassword } from "./screens/ResetPassword";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<ForgotPassword />} />
        <Route path="/redefinir-senha" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
