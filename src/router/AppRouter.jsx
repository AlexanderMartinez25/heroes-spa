import { Routes, Route } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        {/* cualquier ruta que no sea el login vaya a HeroesRoutes */}
        <Route path="/*" element={<HeroesRoutes />} />

      </Routes>
    </>
  )
}
