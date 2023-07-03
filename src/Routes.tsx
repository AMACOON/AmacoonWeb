import { Route, Routes as Switch } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./pages/Login";
import LitterRecord from "./pages/LitterRecord";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Login />} /> 
      <Route path="/home" element={<Home />} /> 
      <Route path="/services" element={<Services />} /> 
      <Route path="/registro-ninhada" element={<LitterRecord />} />
    </Switch>
  );
}
