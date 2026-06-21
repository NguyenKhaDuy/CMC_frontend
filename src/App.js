import { Routes, Route } from "react-router-dom";

import CustomerLayout from "./Layouts/CustomerLayout";
import Home from "./Pages/User/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<CustomerLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
