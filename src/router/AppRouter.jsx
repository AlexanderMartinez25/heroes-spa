import { Routes, Route } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        {/* RUTA PROTEGIDA */}
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/* cualquier ruta que no sea el login vaya a HeroesRoutes */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}

      </Routes>
    </>
  )
}
