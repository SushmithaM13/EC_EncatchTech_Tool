import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Auth/login";
import SignUp from "../components/Auth/signUp";
import Home from "../components/home";
import Appointments from "../pages/Appointments/appointments";


export const RoutingAll = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
      <Route path="/appointments" element={<Appointments/>} />
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