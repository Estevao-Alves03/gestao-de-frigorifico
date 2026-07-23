import { Routes, Route } from "react-router-dom";

import { AppLayout } from "./components/layout/AppLayout";
import Dashboard from "./pages/Home/Dashborad";
import Product from "./pages/Home/Products";

function App(){
  return (
    <Routes>
       <Route element={<AppLayout/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/products" element={<Product/>}/>
       </Route>
    </Routes>
  )
}

export default App