import { Suspense, lazy } from "react";
import { Navigate, Route, Routes, Redirect } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard/index";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import GeneralApp from '../pages/dashboard/GeneralApp'
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};const app ="app"
console.log(GeneralApp)

export default function Router() {
   return (
    <Routes>
      <Route path="/" element={<DashboardLayout/>}>
      <Route path={app} element={<GeneralApp/>}/>
        </Route>
       
        <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
   )
}


// const Contact = Loadable(lazy(() => import("../sections/dashboard/Contact")));
// const Page404 = Loadable(lazy(() => import("../pages/404")));


// Settigs
