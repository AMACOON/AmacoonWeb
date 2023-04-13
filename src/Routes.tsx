import { Route, Routes as Switch } from "react-router-dom";

import Home from "./pages/Home";
import LitterRecord from "./pages/LitterRecord";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/registro-ninhada" element={<LitterRecord />} />
    </Switch>
  );
}
