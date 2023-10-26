import 'antd/dist/reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/ItemPage";


function App() {


  return (
     <>
        <BrowserRouter>
                 <Routes>
                       <Route path="/" element={ <Homepage/> }> </Route>
                       <Route path="/items" element={ <ItemPage />}> </Route> 
                 </Routes>
        </BrowserRouter>
     </>
  );
}

export default App;