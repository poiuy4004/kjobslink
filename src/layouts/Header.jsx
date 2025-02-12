import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header style={{position: "fixed", top: 0, left: 0, width: "100%", height: "4rem", display: "flex", justifyContent: "center", borderBottomStyle: "solid", borderBottomWidth: 1, borderBottomColor: "rgba(229,231,235)", backgroundColor: "white"}}>
    <div style={{width: "72%", display: "flex", justifyContent: "space-between", alignItems: "center",}}>
    <Link to="/">LOGO</Link>
    <nav style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <ul style={{width: "90%", display: "flex", justifyContent: "space-between"}}>
        <div className="navBox">
          <Link to="/greeting"><li>회사소개 ∨</li></Link>
          <div className="navDetail">
            <Link to="/greeting">인사말</Link>
            <Link to="/ideology">경영이념</Link>
            <Link to="/history">회사연혁</Link>
            <Link to="/organizationChart">회사조직</Link>
            <Link to="/cooperation">협력기관</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to="/resume"><li>구직자 ∨</li></Link>
          <div className="navDetail">
            <Link to="/resume">이력서 등록</Link>
            <Link to="/smart">스마트매칭</Link>
            <Link to="/mento">1:1멘토링(면접/상담)</Link>
            <Link to="/adapta">적응프로그램</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>기업 ∨</li></Link>
          <div className="navDetail">
            <Link to="">인재현황</Link>
            <Link to="">인재채용</Link>
            <Link to="">인재매칭</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>송출기업 ∨</li></Link>
          <div className="navDetail">
            <Link to="/joincompany">협약신청</Link>
            <Link to="">인재등록</Link>
            <Link to="">구인매칭</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>대학 ∨</li></Link>
          <div className="navDetail">
            <Link to="">협약신청</Link>
            <Link to="">자료등록</Link>
            <Link to="">D-2신청</Link>
            <Link to="">D-4신청</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>정보광장 ∨</li></Link>
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
          <Link to=""><li>서비스신청 ∨</li></Link>
          <div className="navDetail">
            <Link to="">비자신청</Link>
            <Link to="">비자연장</Link>
            <Link to="">외국인등록번호발급</Link>
            <Link to="">한국어교육</Link>
            <Link to="">법정의무교육</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>한국어 ∨</li></Link>
          <div className="navDetail">
            <Link to="">영어</Link>
            <Link to="">일본어</Link>
            <Link to="">중국어</Link>
            <Link to="">프랑스어</Link>
            <Link to="">독일어</Link>
          </div>
        </div>
      </ul>
    </nav>
    <div>LOGIN</div>
    </div>
    </header>
  )
}