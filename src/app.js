// import react components:
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// import style files:
import "./style/main.scss";
import "./style/library/global.scss";
import "./style/library/classes.scss";

// icons:
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// layouts & pages:
import Home from "./pages/home";
import Layouts from "./layouts/layouts";
import ErrorPage from "./pages/error-page";
import LoginPage from "./pages/login";
import About from "./pages/about";

// 1- page: host
import Host from "./pages/host/host";
import HostDashboard from "./pages/host/host-dashboard";
import HostVans from "./pages/host/host-vans";
import HostIncome from "./pages/host/host-income";
import HostReveiws from "./pages/host/host-reviews";

// 2- page: vans
import Vans from "./pages/vans/vans";
import VanDetails from "./pages/vans/van-details";

// vans data:
import {getData as vansData} from "./api";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layouts />} errorElement={<ErrorPage />}>
      <Route index element={<Home />}></Route>

      <Route path="host" element={<Host />} loader={null}>
        <Route index element={<HostDashboard />} end loader={null}></Route>
        <Route path="vans" element={<HostVans />} loader={null}></Route>
        <Route path="income" element={<HostIncome />} loader={null}></Route>
        <Route path="reviews" element={<HostReveiws />} loader={null}></Route>
      </Route>
      <Route path="vans" element={<Vans />} loader={vansData}>
        <Route path="?type"></Route>
      </Route>
      <Route path="vans/:item" element={<VanDetails />} loader={vansData}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;