import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import adminList from "./pages/admin/adminList";

import Smart from "./pages/common/Smart";

import Greeting from "./pages/intro/Greeting";
import Ideology from "./pages/intro/Ideology";
import History from "./pages/intro/History";
import OrganizationChart from "./pages/intro/OrganizationChart";
import Cooperation from "./pages/intro/Cooperation";
import Notice from "./pages/intro/Notice";

import JobList from "./pages/info/JJobList";
import PeopleList from "./pages/info/PeopleList";
import CompanyInfo from "./pages/info/CompanyInfo";

import VisaReq from "./pages/service/VisaReq";
import VisaExtend from "./pages/service/VisaExtend";
import VisaSwitch from "./pages/service/VisaSwitch";
import Foreigner from "./pages/service/Foreigner";

import Adapta from "./pages/service/Adapta";

import Resume from "./pages/jobSeeker/Resume";
import Mento from "./pages/jobSeeker/Mento";


import D2 from "./pages/jobSeeker/D2";
import D4 from "./pages/jobSeeker/D4";

import JoinCompany from "./pages/transmittingCompany/JoinCompany";
import JoinUniversity from "./pages/university/JoinUniversity";
import Footer from "./layouts/Footer";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/adminlist" Component={adminList} />

        <Route path="/smart" Component={Smart} />

        {/* 회사소개 */}
        <Route path="/greeting" Component={Greeting} />
        <Route path="/ideology" Component={Ideology} />
        <Route path="/history" Component={History} />
        <Route path="/organizationChart" Component={OrganizationChart} />
        <Route path="/cooperation" Component={Cooperation} />
        <Route path="/notice" Component={Notice} />

        {/* 채용정보 */}
        <Route path="/joblist" Component={JobList} />
        <Route path="/peoplelist" Component={PeopleList} />
        <Route path="/companyinfo" Component={CompanyInfo} />


        {/* 지원서비스 */}
        <Route path="/visareq" Component={VisaReq} />
        <Route path="/visaextend" Component={VisaExtend} />
        <Route path="/visaswitch" Component={VisaSwitch} />
        <Route path="/foreigner" Component={Foreigner} />

        <Route path="/adapta" Component={Adapta} />
        {/* 구직자 */}
        <Route path="/resume" Component={Resume} />
        <Route path="/mento" Component={Mento} />
        {/* smart */}
        {/* adapta */}
        <Route path="/d2" Component={D2} />
        <Route path="/d4" Component={D4} />
        
        {/* 채용기업 */}
        <Route path="/joincompany" Component={JoinCompany} />
        <Route path="/" Component={Home} />
        <Route path="/" Component={Home} />

        {/* 송출기업 */}


        {/* 대학 */}
        <Route path="/joinuniversity" Component={JoinUniversity} />
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
        <Route path="/" Component={Home} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
export default Router;