import { Routes, Route, Navigate } from "react-router-dom";

import { DcPages, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";
import { NavBar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPages />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to='/marvel' />} />
      </Routes>
    </>
  )
}
