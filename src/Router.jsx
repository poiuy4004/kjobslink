import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Greeting from "./pages/intro/Greeting";
import Ideology from "./pages/intro/Ideology";
import History from "./pages/intro/History";
import OrganizationChart from "./pages/intro/OrganizationChart";
import Cooperation from "./pages/intro/Cooperation";

function Router() {
  return (
    <BrowserRouter basename="https://poiuy4004.github.io/kjobslink">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/greeting" Component={Greeting} />
        <Route path="/ideology" Component={Ideology} />
        <Route path="/history" Component={History} />
        <Route path="/organizationChart" Component={OrganizationChart} />
        <Route path="/cooperation" Component={Cooperation} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;