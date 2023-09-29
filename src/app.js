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

// icons:
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// layouts & pages:
import Home from './pages/home';
import Layouts from './layouts/layouts';
import ErrorPage from './pages/error-page';
import About from './pages/about';
import Vans from './pages/vans';

// vans data:
import {getData as vansData} from './api'; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layouts />} errorElement={<ErrorPage/>}>
      <Route index element={<Home />}></Route>
      <Route path="vans" element={<Vans />} loader={vansData}>
        <Route path="?type"></Route>
      </Route>
      <Route path="about" element={<About />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;