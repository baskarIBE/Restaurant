import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../core/Main/Main";
import Reservation from "../components/Reservation/Reservation";

export default function Approuter() {
  return (
      <BrowserRouter>
          <Routes>
              
          <Route path="" element={<Home />} />
            <Route element={<Main />}>
                  <Route path="reservation" element={<Reservation/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}
