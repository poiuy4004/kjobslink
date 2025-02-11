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
          <Link to=""><li>구직자 ∨</li></Link>
          <div className="navDetail">
            <Link>이력서 등록</Link>
            <Link>스마트매칭</Link>
            <Link>1:1멘토링(면접/상담)</Link>
            <Link>적응프로그램</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>기업 ∨</li></Link>
          <div className="navDetail">
            <Link>인재현황</Link>
            <Link>인재채용</Link>
            <Link>인재매칭</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>송출기업 ∨</li></Link>
          <div className="navDetail">
            <Link>협약신청</Link>
            <Link>인재등록</Link>
            <Link>구인매칭</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>대학 ∨</li></Link>
          <div className="navDetail">
            <Link>협약신청</Link>
            <Link>자료등록</Link>
            <Link>D-2신청</Link>
            <Link>D-4신청</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>정보광장 ∨</li></Link>
          <div className="navDetail">
            <Link>비자안내</Link>
            <Link>여행정보</Link>
            <Link>한국문화</Link>
            <Link>기업문화</Link>
            <Link>4대보험</Link>
            <Link>정부사업연계</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>서비스신청 ∨</li></Link>
          <div className="navDetail">
            <Link>비자신청</Link>
            <Link>비자연장</Link>
            <Link>외국인등록번호발급</Link>
            <Link>한국어교육</Link>
            <Link>법정의무교육</Link>
          </div>
        </div>
        <div className="navBox">
          <Link to=""><li>한국어 ∨</li></Link>
          <div className="navDetail">
            <Link>영어</Link>
            <Link>일본어</Link>
            <Link>중국어</Link>
            <Link>프랑스어</Link>
            <Link>독일어</Link>
          </div>
        </div>
      </ul>
    </nav>
    <div>LOGIN</div>
    </div>
    </header>
  )
}