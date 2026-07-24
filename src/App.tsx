import { Routes, Route } from "react-router-dom";

import { AppLayout } from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard/Dashborad";
import Product from "./pages/Products/Products";
import Suppliers from "./pages/Contact/Suppliers";

function App(){
  return (
    <Routes>
       <Route element={<AppLayout/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/suppliers" element={<Suppliers/>}/>
       </Route>
    </Routes>
  )
}

export default App