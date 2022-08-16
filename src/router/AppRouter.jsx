import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";

import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* RUTA PÚBLICA */}
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        {/* RUTA PROTEGIDA */}
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/* <Route path="login" element={<LoginPage />} /> */}

        {/* cualquier ruta que no sea el login vaya a HeroesRoutes */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}

      </Routes>
    </>
  )
}
