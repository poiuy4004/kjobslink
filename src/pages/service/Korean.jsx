export default function Korean(){

  return(
    <main>
    <article style={{width: "72%", display: "flex", flexDirection: "column", rowGap: "3vh"}}>
      <h1>한국어교육</h1>
      <desc>한국 정부기관(교육부, 문체부, 외교부)이 전 세계 한국어 학습자 및 한국어 교원을 대상으로 개발해 무료 제공하는 온라인 학습 플랫폼을 소개합니다.</desc>
      <section style={{width: "100%", padding: 18, borderRadius: 10, backgroundColor: "white"}}>
          <h4>&lt;각 기관 홈페이지 주소&gt;</h4>
          <ul style={{padding: "1vh 1vw"}}>
            <li style={{padding: "1vh"}}><span>1. 온라인 세종학당 : </span><a target="_blank" href="https://www.iksi.or.kr/lms/main/main.do">https://www.iksi.or.kr/lms/main/main.do</a></li>
            <li style={{padding: "1vh"}}><span>2. 한국어교수학습샘터 : </span><a target="_blank" href="https://kcenter.korean.go.kr/">https://kcenter.korean.go.kr/</a></li>
            <li style={{padding: "1vh"}}><span>3. 재외교육기관포털 : </span><a target="_blank" href="http://okep.moe.go.kr/root/index.do">http://okep.moe.go.kr/root/index.do</a></li>
            <li style={{padding: "1vh"}}><span>4. KOCW : </span><a target="_blank" href="http://www.kocw.net/home/index.do">http://www.kocw.net/home/index.do</a></li>
            <li style={{padding: "1vh"}}><span>5. 스터디 코리안 : </span><a target="_blank" href="http://study.korean.net/servlet/action.home.MainAction">http://study.korean.net/servlet/action.home.MainAction</a></li>
          </ul>
      </section>
    </article>
    </main>
  )
}