import { Link } from "react-router-dom";
import useZustand from "../store/zustand";

export default function Header2(){
  const sort = useZustand.sortStore(state=>state.sort)
  const page = useZustand.pageStore(state=>state.page)
  const setPage = useZustand.pageStore(state=>state.setPage)
  
  return(
    <>
    {
      sort=="intro"?
        <ul className="header2">
          <Link to="/greeting" onClick={()=>setPage("greeting")}><li style={{color: page=="greeting"? "blue":"black"}}>인사말</li></Link>
          <Link to="/ideology" onClick={()=>setPage("ideology")}><li style={{color: page=="ideology"? "blue":"black"}}>경영이념</li></Link>
          <Link to="/history" onClick={()=>setPage("history")}><li style={{color: page=="history"? "blue":"black"}}>회사연혁</li></Link>
          <Link to="/organizationChart" onClick={()=>setPage("organizationChart")}><li style={{color: page=="organizationChart"? "blue":"black"}}>회사조직</li></Link>
          <Link to="/cooperation" onClick={()=>setPage("cooperation")}><li style={{color: page=="cooperation"? "blue":"black"}}>협력기관</li></Link>
          <Link to="/notice" onClick={()=>setPage("notice")}><li style={{color: page=="notice"? "blue":"black"}}>공지사항</li></Link>
        </ul>
      : sort=="info"?
        <ul className="header2">
          <Link to="/joblist" onClick={()=>setPage("joblist")}><li style={{color: page=="joblist"? "blue":"black"}}>채용공고</li></Link>
          <Link to="/peoplelist" onClick={()=>setPage("peoplelist")}><li style={{color: page=="peoplelist"? "blue":"black"}}>인재현황</li></Link>
          <Link to="/companyinfo" onClick={()=>setPage("companyinfo")}><li style={{color: page=="companyinfo"? "blue":"black"}}>기업정보</li></Link>
          <Link to="/smart" onClick={()=>setPage("smart")}><li style={{color: page=="smart"? "blue":"black"}}>스마트 매칭</li></Link>
        </ul>
      : sort=="service"?
        <ul className="header2">
          <Link to="/visareq" onClick={()=>setPage("visareq")}><li style={{color: page=="visareq"? "blue":"black"}}>비자신청</li></Link>
          <Link to="/visaextend" onClick={()=>setPage("visaextend")}><li style={{color: page=="visaextend"? "blue":"black"}}>비자연장</li></Link>
          <Link to="/visaswitch" onClick={()=>setPage("visaswitch")}><li style={{color: page=="visaswitch"? "blue":"black"}}>비자전환</li></Link>
          <Link to="/foreigner" onClick={()=>setPage("foreigner")}><li style={{color: page=="foreigner"? "blue":"black"}}>외국인등록번호발급</li></Link>
          <Link to="/korean" onClick={()=>setPage("korean")}><li style={{color: page=="korean"? "blue":"black"}}>한국어교육</li></Link>
          <Link to="/adapta" onClick={()=>setPage("adapta")}><li style={{color: page=="adapta"? "blue":"black"}}>적응프로그램</li></Link>
          <Link to="/edu" onClick={()=>setPage("edu")}><li style={{color: page=="edu"? "blue":"black"}}>법정의무교육</li></Link>
        </ul>
      : sort=="community"?
        <ul className="header2">
          <Link to="/resume" onClick={()=>setPage("visareq")}><li style={{color: page=="resume"? "blue":"black"}}>VISA</li></Link>
          <Link to="/mento" onClick={()=>setPage("visareq")}><li style={{color: page=="mento"? "blue":"black"}}>여행</li></Link>
          <Link to="/smart" onClick={()=>setPage("visareq")}><li style={{color: page=="smart"? "blue":"black"}}>문화</li></Link>
          <Link to="/adapta" onClick={()=>setPage("visareq")}><li style={{color: page=="adapta"? "blue":"black"}}>기업</li></Link>
          <Link to="/d2" onClick={()=>setPage("visareq")}><li style={{color: page=="d2"? "blue":"black"}}>법률</li></Link>
          <Link to="/d4" onClick={()=>setPage("visareq")}><li style={{color: page=="d4"? "blue":"black"}}>정부사업</li></Link>
        </ul>
      : sort=="jobSeeker"?
        <ul className="header2">
          <Link to="/resume" onClick={()=>setPage("resume")}><li style={{color: page=="resume"? "blue":"black"}}>이력서 등록</li></Link>
          <Link to="/mento" onClick={()=>setPage("mento")}><li style={{color: page=="mento"? "blue":"black", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div>1:1 멘토링</div>
            <div style={{fontSize: 10}}>(면접/상담)</div>
          </li></Link>
          <Link to="/joblist" onClick={()=>setPage("joblist")}><li style={{color: page=="joblist"? "blue":"black"}}>채용 공고</li></Link>
          <Link to="/smart" onClick={()=>setPage("smart")}><li style={{color: page=="smart"? "blue":"black"}}>스마트 매칭</li></Link>
          <Link to="/adapta" onClick={()=>setPage("adapta")}><li style={{color: page=="adapta"? "blue":"black"}}>적응프로그램</li></Link>
          <Link to="/d2" onClick={()=>setPage("d2")}><li style={{color: page=="d2"? "blue":"black"}}>D-2 신청</li></Link>
          <Link to="/d4" onClick={()=>setPage("d4")}><li style={{color: page=="d4"? "blue":"black"}}>D-4 신청</li></Link>
        </ul>
      : sort=="company"?
        <ul className="header2">
          <Link to="/resume" onClick={()=>setPage("visareq")}><li style={{color: page=="resume"? "blue":"black"}}>파트너 등록</li></Link>
          <Link to="/resume" onClick={()=>setPage("visareq")}><li style={{color: page=="resume"? "blue":"black"}}>구인공고 등록</li></Link>
          <Link to="/mento" onClick={()=>setPage("visareq")}><li style={{color: page=="mento"? "blue":"black"}}>인재 현황</li></Link>
          <Link to="/smart" onClick={()=>setPage("visareq")}><li style={{color: page=="smart"? "blue":"black"}}>스마트 매칭</li></Link>
        </ul>
      : sort=="transmitting"?
        <ul className="header2">
          <Link to="/resume" onClick={()=>setPage("visareq")}><li style={{color: page=="resume"? "blue":"black"}}>협약 신청</li></Link>
          <Link to="/mento" onClick={()=>setPage("visareq")}><li style={{color: page=="mento"? "blue":"black"}}>인재 등록</li></Link>
          <Link to="/smart" onClick={()=>setPage("visareq")}><li style={{color: page=="smart"? "blue":"black"}}>채용 공고</li></Link>
          <Link to="/adapta" onClick={()=>setPage("visareq")}><li style={{color: page=="adapta"? "blue":"black"}}>스마트 매칭</li></Link>
        </ul>
      : sort=="university"?
        <ul className="header2">
          <Link to="/resume" onClick={()=>setPage("visareq")}><li style={{color: page=="resume"? "blue":"black"}}>이력서 등록</li></Link>
          <Link to="/mento" onClick={()=>setPage("visareq")}><li style={{color: page=="mento"? "blue":"black"}}>1:1 멘토링 (면접/상담)</li></Link>
          <Link to="/smart" onClick={()=>setPage("visareq")}><li style={{color: page=="smart"? "blue":"black"}}>스마트 매칭</li></Link>
          <Link to="/adapta" onClick={()=>setPage("visareq")}><li style={{color: page=="adapta"? "blue":"black"}}>적응프로그램</li></Link>
          <Link to="/d2" onClick={()=>setPage("visareq")}><li style={{color: page=="d2"? "blue":"black"}}>D-2 신청</li></Link>
          <Link to="/d4" onClick={()=>setPage("visareq")}><li style={{color: page=="d4"? "blue":"black"}}>D-4 신청</li></Link>
        </ul>
      : null
    }
    </>
  )
}