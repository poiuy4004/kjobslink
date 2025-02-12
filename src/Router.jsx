import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Greeting from "./pages/intro/Greeting";
import Ideology from "./pages/intro/Ideology";
import History from "./pages/intro/History";
import OrganizationChart from "./pages/intro/OrganizationChart";
import Cooperation from "./pages/intro/Cooperation";

import Resume from "./pages/jobSeeker/Resume";
import Smart from "./pages/jobSeeker/Smart";
import Mento from "./pages/jobSeeker/Mento";
import Adapta from "./pages/jobSeeker/Adapta";

import JoinCompany from "./pages/transmittingCompany/JoinCompany";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />

        <Route path="/greeting" Component={Greeting} />
        <Route path="/ideology" Component={Ideology} />
        <Route path="/history" Component={History} />
        <Route path="/organizationChart" Component={OrganizationChart} />
        <Route path="/cooperation" Component={Cooperation} />

        <Route path="/resume" Component={Resume} />
        <Route path="/smart" Component={Smart} />
        <Route path="/mento" Component={Mento} />
        <Route path="/adapta" Component={Adapta} />

        <Route path="/joincompany" Component={JoinCompany} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />
      </Routes>
    </HashRouter>
  );
}
export default Router;