import { Route, Routes as Switch } from "react-router-dom";

import Home from "./pages/Home";
import Owner from "./pages/Owner";
import CatShort from"./pages/CatShort";
import Services from "./pages/Services";
import Login from "./pages/Login";
import LitterRecord from "./pages/LitterRecord";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Login />} /> 
      <Route path="/home" element={<Home />} />
      <Route path="/owner/:userId" element={<Owner />} />
      <Route path="/listagem-gato/:userId" element={<CatShort />} />   
      <Route path="/services/:userId" element={<Services />} /> 
      <Route path="/registro-ninhada/:userId" element={<LitterRecord />} />
    </Switch>
  );
}
