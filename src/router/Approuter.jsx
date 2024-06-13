import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../core/Main/Main";
import Reservation from "../components/Reservation/Reservation";
import Contactus from "../components/Contactus/Contactus";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Faq from "../components/Faq/Faq";
import Shop from "../components/shop/Shop";
import Productall from "../components/shopall/Productall";

export default function Approuter() {
  return (
      <BrowserRouter>
          <Routes>
              
          <Route path="" element={<Home />} />
            <Route element={<Main />}>
                  <Route path="reservation" element={<Reservation/>}/>
                  <Route path="Contactus" element={<Contactus />}/>
                  <Route path="login" element={<Login />}/>
                  <Route path="registration" element={<Registration />}/>
                  <Route path="faq" element={<Faq />}/>
                  <Route path="shop" element={<Shop />}/>
                  <Route path="productall" element={<Productall />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}
