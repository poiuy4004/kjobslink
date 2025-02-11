
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <main style={{marginTop: "6rem", marginBottom: "6rem", display: "flex", flexDirection: "column", rowGap: 77}}>

      <div style={{zIndex: -1, position: "fixed", top: "2rem", left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "end"}}>
        <div>
          <div style={{width: 337, height: 337, position: "absolute", backgroundColor: "rgba(255,255,255,.7)"}} />
          <img width="337" height="337" src="https://kjobslink.co.kr/theme/bootstrap5-basic/img/01.png" />
        </div>
        <div>
          <div style={{width: 377, height: 377, position: "absolute", backgroundColor: "rgba(255,255,255,.7)"}} />
          <img width="377" height="377" src="https://kjobslink.co.kr/theme/bootstrap5-basic/img/02.png" style={{marginBottom: "-2rem",}} />
        </div>
      </div>

      <article style={{width: "72%", minHeight: "42rem", display: "flex", alignItems: "center"}}>
        <section style={{width: "50%"}}>
          <div style={{width: "40%", padding: 10, display: "flex", justifyContent: "space-between", borderRadius: 18, backgroundColor: "rgb(243,244,246)"}}>
            <span style={{paddingTop: 1, paddingBottom: 3, paddingLeft: 7, paddingRight: 7, color: "white", borderRadius: 14, backgroundColor: "#034d90"}}>New</span>
            <span>매일 매일 새로운 공고!</span>
          </div>
          <div style={{marginTop: 32}}>당신의 꿈을<br />실현할 일자리를 찾으세요!</div>
          <div style={{marginTop: 24}}>다양한 산업의 최신 일자리와 기회를 찾을 수 있는 플랫폼,<br />모든 직업을 연결하고, 미래를 설계합니다.</div>
          <div style={{marginTop: 32, display: "flex", columnGap: "1rem"}}>
            <button style={{padding: 18, borderRadius: 14, color: "white", backgroundColor: "#034d90"}}>채용공고 보기</button>
            <button style={{padding: 18, borderRadius: 14, color: "white", backgroundColor: "#034d90"}}>구인공고 보기</button>
          </div>
        </section>
        <section style={{width: "50%", height: 277, display: "flex", justifyContent: "center", pointerEvents: "none"}}>
          <iframe width="80%" height="100%" src="https://www.youtube.com/embed/bHwz2DZMVr0?autoplay=1&mute=1&controls=0&loop=1&playlist=bHwz2DZMVr0"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </section>
      </article>

      <article style={{width: "100%", paddingTop: "4rem", paddingBottom: "4rem", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(249,250,251,1)"}}>
        <div>신뢰할 수 있는 파트너사</div>
        <div style={{marginTop: "1rem", marginBottom: "2rem"}}>수많은 우수 기업들이 K-JOBS와 함께하고 있습니다</div>
        <div style={{display: "flex", columnGap: 77}}>
          <img height="37" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1600px-Samsung_Logo.svg.png" />
          <img height="37" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LG_logo_%282014%29.svg/1200px-LG_logo_%282014%29.svg.png" />
          <img height="37" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Naver_Logotype.svg/1042px-Naver_Logotype.svg.png" />
          <img height="37" src="https://www.wooribank.com.kh/wp-content/uploads/2022/07/cropped-cropped-Header-Logo-1.png" />
          <img height="37" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/1597px-Hyundai_Motor_Company_logo.svg.png" />
        </div>
      </article>

      <article style={{width: "72%", display: "flex", flexDirection: "column", alignItems: "center",}}>
        <div>소셜미디어</div>
        <div style={{marginTop: "1rem", marginBottom: "2rem"}}>K-JOBS의 최신 소식을 확인하세요</div>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
          <img width="277" height="444" style={{border: ["solid", "blue", "1px"], borderRadius: 18, backgroundColor: "rgba(234,234,234,1)"}} />
          <img width="277" height="444" style={{border: ["solid", "blue", "1px"], borderRadius: 18, backgroundColor: "rgba(234,234,234,1)"}} />
          <img width="277" height="444" style={{border: ["solid", "blue", "1px"], borderRadius: 18, backgroundColor: "rgba(234,234,234,1)"}} />
          <img width="277" height="444" style={{border: ["solid", "blue", "1px"], borderRadius: 18, backgroundColor: "rgba(234,234,234,1)"}} />
        </div>
      </article>

    </main>
    <Footer />
    </>
  );
}