import { Route, createBrowserRouter, 
    createRoutesFromElements } from "react-router-dom";
  
  import HomePage from "../HomePage";
  
  
import ErrorHandler from "../errors/ErrorHandler";
import PageNotFound from "../errors/PageNotFound";
import AddCart from "../AddCart";
import ProtectedRoute from "../auth/ProtectedRoute";
import RootLayout from "../pages/RootLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
 
  
  
  const storageKey = 'routeLoged';
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Root Layout */}
        <Route path="/" element={<RootLayout />} 
        errorElement={<ErrorHandler />}>
          <Route
            index
            element={
              //  <ProtectedRoute isAllowed={userData?.jwt} 
              //  redirectPath="/login" 
              //  data={userData}>
              // <HomePage />
              //  </ProtectedRoute> 
                <HomePage />
            }
          />
         
          <Route
            path="/AddCart"
            element={
              // <ProtectedRoute isAllowed={userData?.jwt} 
              // redirectPath="/login" 
              // data={userData}>
              //    <AddCart />
              // </ProtectedRoute>
              <AddCart />
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute isAllowed={!userData?.jwt} redirectPath="/" 
              data={userData}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute isAllowed={!userData?.jwt} 
              redirectPath="/login" data={userData?.jwt}>
                <Register />
              </ProtectedRoute>
            }
          />
  
        </Route>
  
        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );
  
  export default router;
  