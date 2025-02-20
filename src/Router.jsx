import { HashRouter, Routes, Route } from "react-router-dom";
import useZustand from "./store/zustand";

import Header from "./layouts/Header";
import Header2 from "./layouts/Header2";

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
import Korean from "./pages/service/Korean";
import Adapta from "./pages/service/Adapta";
import Edu from "./pages/service/Edu";

import Visa from "./pages/community/Visa";
import Travel from "./pages/community/Travel";
import Culture from "./pages/community/Culture";
import Corporation from "./pages/community/Corporation";
import Law from "./pages/community/Law";
import Government from "./pages/community/Government";

import Resume from "./pages/jobSeeker/Resume";
import Mento from "./pages/jobSeeker/Mento";
import D2 from "./pages/jobSeeker/D2";
import D4 from "./pages/jobSeeker/D4";

import Partner from "./pages/company/Partner";
import JobPost from "./pages/company/JobPost";

import JoinCompany from "./pages/transmittingCompany/JoinCompany";
import AddPerson from "./pages/transmittingCompany/AddPerson";

import JoinUniversity from "./pages/university/JoinUniversity";
import UniversityPost from "./pages/university/UniversityPost";

import Footer from "./layouts/Footer";

function Router() {
  const sort = useZustand.sortStore(state=>state.sort)
  const page = useZustand.pageStore(state=>state.page)

  return (
    <HashRouter>
      <Header />
      <Header2 sort={sort} page={page} />
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
        <Route path="/korean" Component={Korean} />
        <Route path="/adapta" Component={Adapta} />
        <Route path="/edu" Component={Edu} />

        {/* 커뮤니티 */}
        <Route path="/visa" Component={Visa} />
        <Route path="/travel" Component={Travel} />
        <Route path="/culture" Component={Culture} />
        <Route path="/corporation" Component={Corporation} />
        <Route path="/law" Component={Law} />
        <Route path="/government" Component={Government} />

        {/* 구직자 */}
        <Route path="/resume" Component={Resume} />
        <Route path="/mento" Component={Mento} />
        {/* smart */}
        {/* adapta */}
        <Route path="/d2" Component={D2} />
        <Route path="/d4" Component={D4} />
        
        {/* 채용기업 */}
        <Route path="/partner" Component={Partner} />
        <Route path="/jobpost" Component={JobPost} />
        {/* 인재현황 */}
        {/* 스마트 매칭 */}

        {/* 송출기업 */}
        <Route path="/joincompany" Component={JoinCompany} />
        <Route path="/addperson" Component={AddPerson} />
        {/* 채용공고 */}
        {/* 스마트 매칭 */}

        {/* 대학 */}
        <Route path="/joinuniversity" Component={JoinUniversity} />
        <Route path="/universitypost" Component={UniversityPost} />
        {/* D2 */}
        {/* D4 */}

      </Routes>
      <Footer />
    </HashRouter>
  );
}
export default Router;