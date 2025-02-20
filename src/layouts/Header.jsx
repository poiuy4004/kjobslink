import { Link } from "react-router-dom";
import useZustand from "../store/zustand";
export default function Header(){
  const sort = useZustand.sortStore(state=>state.sort)
  const setSort = useZustand.sortStore(state=>state.setSort)
  const setPage = useZustand.pageStore(state=>state.setPage)
  return(
    <header style={{position: "fixed", top: 0, left: 0, width: "100%", height: "4rem", display: "flex", justifyContent: "center", borderBottomStyle: "solid", borderBottomWidth: 1, borderBottomColor: "rgba(229,231,235)", backgroundColor: "white"}}>
    <div style={{width: "72%", display: "flex", justifyContent: "space-between", alignItems: "center",}}>

    <Link to="/" style={{width: "20%"}} onClick={()=>{setSort(""); setPage("")}}>LOGO</Link>

    <nav style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <ul style={{width: "50%", display: "flex", justifyContent: "space-around"}}>
        <div className="navBox">
          <Link to="/greeting" onClick={()=>{setSort("intro"); setPage("greeting")}}><li style={{color: sort=="intro"? "blue":"black"}}>회사소개</li></Link>
          <div className="navDetail">
            <Link to="/greeting" onClick={()=>{setSort("intro"); setPage("greeting")}}>인사말</Link>
            <Link to="/ideology" onClick={()=>{setSort("intro"); setPage("ideology")}}>경영이념</Link>
            <Link to="/history" onClick={()=>{setSort("intro"); setPage("history")}}>회사연혁</Link>
            <Link to="/organizationChart" onClick={()=>{setSort("intro"); setPage("organizationChart")}}>회사조직</Link>
            <Link to="/cooperation" onClick={()=>{setSort("intro"); setPage("cooperation")}}>협력기관</Link>
            <Link to="/notice" onClick={()=>{setSort("intro"); setPage("notice")}}>공지사항</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to="/joblist" onClick={()=>{setSort("info"); setPage("joblist")}}><li style={{color: sort=="info"? "blue":"black"}}>채용정보</li></Link>
          <div className="navDetail">
            <Link to="/joblist" onClick={()=>{setSort("info"); setPage("joblist")}}>채용공고</Link>
            <Link to="/peoplelist" onClick={()=>{setSort("info"); setPage("peoplelist")}}>인재현황</Link>
            <Link to="/companyinfo" onClick={()=>{setSort("info"); setPage("companyinfo")}}>기업정보</Link>
            <Link to="/smart" onClick={()=>{setSort("info"); setPage("smart")}}>스마트 매칭</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to="/visareq" onClick={()=>{setSort("service"); setPage("visareq")}}><li style={{color: sort=="service"? "blue":"black"}}>지원서비스</li></Link>
          <div className="navDetail">
            <Link to="/visareq" onClick={()=>{setSort("service"); setPage("visareq")}}>비자신청</Link>
            <Link to="/visaextend" onClick={()=>{setSort("service"); setPage("visaextend")}}>비자연장</Link>
            <Link to="/visaswitch" onClick={()=>{setSort("service"); setPage("visaswitch")}}>비자전환</Link>
            <Link to="/foreigner" onClick={()=>{setSort("service"); setPage("foreigner")}}>외국인등록번호발급</Link>
            <Link to="/korean" onClick={()=>{setSort("service"); setPage("korean")}}>한국어교육</Link>
            <Link to="/adapta" onClick={()=>{setSort("service"); setPage("adapta")}}>적응프로그램</Link>
            <Link to="/edu" onClick={()=>{setSort("service"); setPage("edu")}}>법정의무교육</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to="/infomation" onClick={()=>{setSort("community"); setPage("infomation")}}><li style={{color: sort=="community"? "blue":"black"}}>커뮤니티</li></Link>
          <div className="navDetail">
            <Link to="/infomation" onClick={()=>{setSort("community"); setPage("infomation")}}>정보광장</Link>
            <Link to="/visa" onClick={()=>{setSort("community"); setPage("visa")}}>VISA</Link>
            <Link to="/travel" onClick={()=>{setSort("community"); setPage("travel")}}>여행</Link>
            <Link to="/culture" onClick={()=>{setSort("community"); setPage("culture")}}>문화</Link>
            <Link to="/corporation" onClick={()=>{setSort("community"); setPage("corporation")}}>기업</Link>
            <Link to="/law" onClick={()=>{setSort("community"); setPage("law")}}>법률</Link>
            <Link to="/government" onClick={()=>{setSort("community"); setPage("government")}}>정부사업</Link>
          </div>
        </div>









        {/* <div className="navBox">
          <Link to="/greeting"><li>회사소개</li></Link>
          <div className="navDetail">
            <Link to="/greeting">인사말</Link>
            <Link to="/ideology">경영이념</Link>
            <Link to="/history">회사연혁</Link>
            <Link to="/organizationChart">회사조직</Link>
            <Link to="/cooperation">협력기관</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to="/resume"><li>구직자</li></Link>
          <div className="navDetail">
            <Link to="/resume">이력서 등록</Link>
            <Link to="/smart">스마트매칭</Link>
            <Link to="/mento">1:1멘토링(면접/상담)</Link>
            <Link to="/adapta">적응프로그램</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>기업</li></Link>
          <div className="navDetail">
            <Link to="">인재현황</Link>
            <Link to="">인재채용</Link>
            <Link to="">인재매칭</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>송출기업</li></Link>
          <div className="navDetail">
            <Link to="/joincompany">협약신청</Link>
            <Link to="">인재등록</Link>
            <Link to="">구인매칭</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>대학</li></Link>
          <div className="navDetail">
            <Link to="">협약신청</Link>
            <Link to="">자료등록</Link>
            <Link to="">D-2신청</Link>
            <Link to="">D-4신청</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>정보광장</li></Link>
          <div className="navDetail">
            <Link to="">비자안내</Link>
            <Link to="">여행정보</Link>
            <Link to="">한국문화</Link>
            <Link to="">기업문화</Link>
            <Link to="">4대보험</Link>
            <Link to="">정부사업연계</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>서비스신청</li></Link>
          <div className="navDetail">
            <Link to="">비자신청</Link>
            <Link to="">비자연장</Link>
            <Link to="">외국인등록번호발급</Link>
            <Link to="">한국어교육</Link>
            <Link to="">법정의무교육</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>언어 ∨</li></Link>
          <div className="navDetail">
            <Link to="">영어</Link>
            <Link to="">일본어</Link>
            <Link to="">중국어</Link>
            <Link to="">프랑스어</Link>
            <Link to="">독일어</Link>
          </div>
        </div> */}
      </ul>
    </nav>

    <div className="navBox" style={{width: "20%", display: "flex", justifyContent: "flex-end"}}>
      <div className="navBox">
        <Link to=""><li>언어</li></Link>
        <div className="navDetail">
          <Link to="">영어</Link>
          <Link to="">일본어</Link>
          <Link to="">중국어</Link>
          <Link to="">프랑스어</Link>
          <Link to="">독일어</Link>
        </div>
      </div>
      <div className="navBox">
        <Link>🙎‍♂️</Link>
        <div className="navDetail">
          <Link>프로필</Link>
          <Link to="/adminlist">관리자 페이지</Link>
          <Link>로그아웃</Link>
        </div>
      </div>
    </div>
    </div>
    </header>
  )
}