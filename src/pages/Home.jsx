import { Link } from "react-router-dom";
import useZustand from "../store/zustand";

export default function Home() {
  const setSort = useZustand.sortStore(state=>state.setSort)
  const setPage = useZustand.pageStore(state=>state.setPage)
  return (
    
    <main style={{display: "flex", flexDirection: "column", rowGap: 77,}}>

      <article style={{zIndex: 1, width: "55%",}}>
        <section style={{display: "flex", justifyContent: "space-between", fontSize: 24,}}>
          <Link to="/resume" style={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: 3}} onClick={()=>{setSort("jobSeeker"); setPage("resume")}} className="homeIcon">
            <img width="55" height="55" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YAx26dX312BrMA-VxRSRJYzdpfzqsLH3pA&s" />
            <div>구직자</div>
          </Link>
          <Link to="/partner" style={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: 3}} onClick={()=>{setSort("company"); setPage("partner")}} className="homeIcon">
            <img width="55" height="55" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZvZzdFb0yYp-LrH4eDtW0M5798LAVC_KNw&s" />
            <div>채용기업</div>
          </Link>
          <Link to="/joincompany" style={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: 3}} onClick={()=>{setSort("transmittingcompany"); setPage("joincompany")}} className="homeIcon">
            <img width="55" height="55" src="https://w7.pngwing.com/pngs/940/702/png-transparent-computer-icons-company-business-organization-business-icons-company-text-service.png" />
            <div>송출기업</div>
          </Link>
          <Link to="/joinuniversity" style={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: 3}} onClick={()=>{setSort("university"); setPage("joinuniversity")}} className="homeIcon">
            <img width="55" height="55" src="https://compphoto.incruit.com/2022/05/%EC%97%90%EC%BF%BC%ED%8B%B0%EC%96%B8%20%EB%A1%9C%EA%B3%A0.png" />
            <div>대학/어학당</div>
          </Link>
        </section>
      </article>

      <article style={{zIndex: 1, width: "72%", paddingTop: 55, paddingBottom: 150, display: "flex", alignItems: "center"}}>
        <section style={{width: "50%"}}>
          <div style={{width: "40%", padding: 10, display: "flex", justifyContent: "space-between", borderRadius: 18, backgroundColor: "rgb(243,244,246)"}}>
            <span style={{paddingTop: 1, paddingBottom: 3, paddingLeft: 7, paddingRight: 7, color: "white", borderRadius: 14, backgroundColor: "#034d90"}}>New</span>
            <span>매일 매일 새로운 공고!</span>
          </div>
          <div style={{marginTop: 32}}>당신의 꿈을<br />실현할 일자리를 찾으세요!</div>
          <div style={{marginTop: 24}}>다양한 산업의 최신 일자리와 기회를 찾을 수 있는 플랫폼,<br />모든 직업을 연결하고, 미래를 설계합니다.</div>
          <div style={{marginTop: 32, display: "flex", columnGap: "1rem"}}>
            <button style={{padding: 18, borderRadius: 14, color: "white", backgroundColor: "#034d90"}}>채용공고 보기</button>
            {/* <button style={{padding: 18, borderRadius: 14, color: "white", backgroundColor: "#034d90"}}>구인공고 보기</button> */}
          </div>
        </section>
        <section style={{width: "50%", height: 277, display: "flex", justifyContent: "center", pointerEvents: "none"}}>
          <iframe style={{width: "100%", height: "120%", borderRadius: 18}} src="https://www.youtube.com/embed/bHwz2DZMVr0?autoplay=1&mute=1&controls=0&loop=1&playlist=bHwz2DZMVr0"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </section>
      </article>

      <article style={{zIndex: 1, width: "100%", paddingTop: "4rem", paddingBottom: "4rem", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div>신뢰할 수 있는 파트너사</div>
        <div style={{marginTop: "1rem", marginBottom: "2rem"}}>수많은 우수 기업들이 K-JOBS와 함께하고 있습니다</div>
        <div style={{display: "flex", columnGap: 77}}>
          <div style={{width: 140, height: 90, border: "solid black 1px", textAlign: "center", alignContent: "center", backgroundColor: "white"}}><img width="50%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1600px-Samsung_Logo.svg.png" /></div>
          <div style={{width: 140, height: 90, border: "solid black 1px", textAlign: "center", alignContent: "center", backgroundColor: "white"}}><img width="50%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LG_logo_%282014%29.svg/1200px-LG_logo_%282014%29.svg.png" /></div>
          <div style={{width: 140, height: 90, border: "solid black 1px", textAlign: "center", alignContent: "center", backgroundColor: "white"}}><img width="50%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Naver_Logotype.svg/1042px-Naver_Logotype.svg.png" /></div>
          <div style={{width: 140, height: 90, border: "solid black 1px", textAlign: "center", alignContent: "center", backgroundColor: "white"}}><img width="50%" src="https://www.wooribank.com.kh/wp-content/uploads/2022/07/cropped-cropped-Header-Logo-1.png" /></div>
          <div style={{width: 140, height: 90, border: "solid black 1px", textAlign: "center", alignContent: "center", backgroundColor: "white"}}><img width="50%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/1597px-Hyundai_Motor_Company_logo.svg.png" /></div>
        </div>
      </article>

      <article style={{zIndex: 1, width: "72%", display: "flex", flexDirection: "column", alignItems: "center",}}>
        <div>최근 소식</div>
        <div style={{marginTop: "1rem", marginBottom: "2rem"}}>K-JOBS의 최신 소식을 확인하세요</div>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
          <section style={{width: "32%", display: "flex", flexDirection: "column", border: ["solid", "black", "1px"], backgroundColor: "white"}}>
            <Link to="/joblist" style={{padding: 14, borderBottom: "1px solid rgba(0,0,0,.3)"}}>
              채용공고
            </Link>
            <ul>
              <li style={{padding: 10}}>글 제목 1</li>
              <li style={{padding: 10}}>글 제목 2</li>
              <li style={{padding: 10}}>글 제목 3</li>
              <li style={{padding: 10}}>글 제목 4</li>
              <li style={{padding: 10}}>글 제목 5</li>
              <li style={{padding: 10}}>글 제목 6</li>
              <li style={{padding: 10}}>글 제목 7</li>
              <li style={{padding: 10}}>글 제목 8</li>
              <li style={{padding: 10}}>글 제목 9</li>
              <li style={{padding: 10}}>글 제목 10</li>
            </ul>
          </section>
          <section style={{width: "32%", display: "flex", flexDirection: "column", border: ["solid", "black", "1px"], backgroundColor: "white"}}>
            <Link to="/peoplelist" style={{padding: 14, borderBottom: "1px solid rgba(0,0,0,.3)"}}>
              인재현황
            </Link>
            <ul>
              <li style={{padding: 10}}>글 제목 1</li>
              <li style={{padding: 10}}>글 제목 2</li>
              <li style={{padding: 10}}>글 제목 3</li>
              <li style={{padding: 10}}>글 제목 4</li>
              <li style={{padding: 10}}>글 제목 5</li>
              <li style={{padding: 10}}>글 제목 6</li>
              <li style={{padding: 10}}>글 제목 7</li>
              <li style={{padding: 10}}>글 제목 8</li>
              <li style={{padding: 10}}>글 제목 9</li>
              <li style={{padding: 10}}>글 제목 10</li>
            </ul>
          </section>
          <section style={{width: "32%", display: "flex", flexDirection: "column", border: ["solid", "black", "1px"], backgroundColor: "white"}}>
            <Link to="/travel" style={{padding: 14, borderBottom: "1px solid rgba(0,0,0,.3)"}}>
              커뮤니티
            </Link>
            <ul>
              <li style={{padding: 10}}>글 제목 1</li>
              <li style={{padding: 10}}>글 제목 2</li>
              <li style={{padding: 10}}>글 제목 3</li>
              <li style={{padding: 10}}>글 제목 4</li>
              <li style={{padding: 10}}>글 제목 5</li>
              <li style={{padding: 10}}>글 제목 6</li>
              <li style={{padding: 10}}>글 제목 7</li>
              <li style={{padding: 10}}>글 제목 8</li>
              <li style={{padding: 10}}>글 제목 9</li>
              <li style={{padding: 10}}>글 제목 10</li>
            </ul>
          </section>
        </div>
      </article>

      <div style={{zIndex: 0, position: "fixed", top: "2rem", left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "end"}}>
        <div>
          <div style={{width: 337, height: 337, position: "absolute", backgroundColor: "rgba(240,240,240,.9)"}} />
          <img width="337" height="337" src="https://kjobslink.co.kr/theme/bootstrap5-basic/img/01.png" />
        </div>
        <div>
          <div style={{width: 377, height: 377, position: "absolute", backgroundColor: "rgba(240,240,240,.9)"}} />
          <img width="377" height="377" src="https://kjobslink.co.kr/theme/bootstrap5-basic/img/02.png" style={{marginBottom: "-2rem",}} />
        </div>
      </div>

    </main>
    
  );
}