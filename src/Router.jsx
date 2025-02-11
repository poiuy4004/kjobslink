import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Greeting from "./pages/intro/Greeting";
import Ideology from "./pages/intro/Ideology";
import History from "./pages/intro/History";
import OrganizationChart from "./pages/intro/OrganizationChart";
import Cooperation from "./pages/intro/Cooperation";

function Router() {
  return (
    <BrowserRouter basename="https://poiuy4004.github.io/kjobslink/">
      <Routes>
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/greeting" Component={Greeting} />
        <Route path="https://poiuy4004.github.io/kjobslink/ideology" Component={Ideology} />
        <Route path="https://poiuy4004.github.io/kjobslink/history" Component={History} />
        <Route path="https://poiuy4004.github.io/kjobslink/organizationChart" Component={OrganizationChart} />
        <Route path="https://poiuy4004.github.io/kjobslink/cooperation" Component={Cooperation} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
        <Route path="https://poiuy4004.github.io/kjobslink/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;