import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./screens/Login";
import { Cadastro } from "./screens/Cadastro";
import { ForgotPassword } from "./screens/ForgotPassword";
import { ResetPassword } from "./screens/ResetPassword";
import { Welcome } from "./screens/Welcome";
import { Home } from "./screens/Home";
import { Messages } from "./screens/Messages";
import { FriendProfile } from "./screens/FriendProfile";
import { MyProfile } from "./screens/MyProfile";
import { PublishProvider } from "@/components/publish/publish-context";
import { PublishModal } from "@/components/publish/publish-modal";

export function App() {
  return (
    <BrowserRouter>
      <PublishProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mensagens" element={<Messages />} />
          <Route path="/perfil-amigo" element={<FriendProfile />} />
          <Route path="/perfil" element={<MyProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recuperar-senha" element={<ForgotPassword />} />
          <Route path="/redefinir-senha" element={<ResetPassword />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <PublishModal />
      </PublishProvider>
    </BrowserRouter>
  );
}
