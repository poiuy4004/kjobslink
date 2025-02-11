import { useState } from "react"

export default function Header(){
  const [navNum, setNavNum] = useState("hideNav");
  return(
    <header className={navNum}>
      <div>logo</div>

      <nav onMouseOver={()=>setNavNum("rendingNav")} onMouseLeave={()=>setNavNum("hideNav")}>
      <ul style={{display: "flex"}}>

        <div>
          <li style={{minWidth: 180, marginBottom: 37}}>
            <h4>구직자</h4>
          </li>
          <div>
            <div>이력서 등록</div>
            <div>스마트 매칭</div>
            <div>
              <div>1:1멘토링</div>
              <div style={{fontSize: 10}}>(면접/상담)</div>
            </div>
            <div>적응프로그램</div>
          </div>
        </div>

        <div>
          <li style={{minWidth: 180, marginBottom: 37}}>
            <h4>기업</h4>
          </li>
          <div>
            <div>인재현황</div>
            <div>인재채용</div>
            <div>인재매칭</div>
          </div>
        </div>

        <div>
          <li style={{minWidth: 180, marginBottom: 37}}>
            <h4>송출기업</h4>
          </li>
          <div>
            <div>협약신청</div>
            <div>인재등록</div>
            <div>구인매칭</div>
          </div>
        </div>

        <div>
          <li style={{minWidth: 180, marginBottom: 37}}>
            <h4>대학</h4>
          </li>
          <div>
            <div>협약신청</div>
            <div>자료등록</div>
            <div>D-2 신청</div>
            <div>D-4 신청</div>
          </div>
        </div>

        <div>
          <li style={{minWidth: 180, marginBottom: 37}}>
            <h4>정보광장</h4>
          </li>
          <div>
            <div>비자 안내</div>
            <div>여행 정보</div>
            <div>한국문화</div>
            <div>기업문화</div>
            <div>4대보험</div>
            <div>정부사업연계</div>
          </div>
        </div>

        <div>
          <li style={{minWidth: 180, marginBottom: 37}}>
            <h4>서비스신청</h4>
          </li>
          <div>
            <div>비자신청</div>
            <div>비자연장</div>
            <div>비자전환</div>
            <div>외국인등록번호발급</div>
            <div>한국어교육</div>
            <div>법정의무교육</div>
          </div>
        </div>

        <div>
          <li style={{minWidth: 180, marginBottom: 37}}>
            <h4>고객센터</h4>
          </li>
          <div>
            <div>공지사항</div>
            <div>FAQ</div>
            <div>Q&A</div>
            <div>고객센터 안내</div>
          </div>
        </div>

      </ul>
      </nav>

      <div>sign in</div>

    </header>
  )
}