import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import SignUp from '../pages/signUp';
import Home from '../pages/home';
import Page from '../pages/page9';
import Circulars from '../pages/Circulars';
import Homework from '../pages/Homework';
import Page3 from '../pages/page3';
import AssignmentPage from '../pages/AssignmentPage';
import PrivateRoute from './PrivateRoute';

const RoutingAll = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/circulars" element={<Circulars />} />
      <Route path="/homework" element={<Homework />} />
      <Route path="/page9" element={<Page />} />
      <Route path="/classes" element={<PrivateRoute><Page3 /></PrivateRoute>} />
      <Route path="/assignments/:classId" element={<PrivateRoute><AssignmentPage /></PrivateRoute>} />
    </Routes>
  );
};

export default RoutingAll;
