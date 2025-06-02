import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import Home from "../pages/home";
import Page from "../pages/page";
import PrivateRoute from "./PrivateRoute";

export const RoutingAll = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
      <Route path="/page1" element={<Page />} />
    </Routes>
  );
};

export default RoutingAll;






// import { Routes, Route } from "react-router-dom";
// import Login from "../pages/login";
// import SignUp from "../pages/signUp";
// import Page from "../pages/page";
// import Home from "../pages/home";

// export const RoutingAll=()=>{
//     return(
//         <>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/login" element={<Login/>}/>
//             <Route path="/signUp" element={<SignUp/>}/>
//              <Route path="/page1" element={<Page/>} />
//         </Routes>
//         </>
//     )
// }

// export default RoutingAll;