import Header from "../../layouts/Header";
import Header2 from "../../layouts/Header2";

export default function Greeting(){
  return(
    <>
    <Header sort="intro" />
    <Header2 sort="intro" page="greeting" />
    <main>
      <article style={{width: "72%", display: "flex", flexDirection: "column", rowGap: 70}}>
        <section style={{fontSize: 33, fontWeight: "700"}}>
          케이잡스는 고용서비스 전문기업으로 사람과 일자리, 사람과 기업을 이어주는<br />
          job-Networking Social Service 전문가 집단입니다.
        </section>
        <div style={{width: "5%", borderTop: ["solid", "black", "1px"]}} />
        <section style={{display: "flex", flexDirection: "column", rowGap: 50, fontSize: 27}}>
          <div>
            케이잡스 임직원은 일자리와 일거리, 사람을 필요로 하는 대한민국의 모든 국민들이<br />
            자신의 강점을 살려 프로페셔널 일꾼으로 사회의 다양한 분야에서 자리매김할 수 있도록<br />
            모든 열정과 정성을 더하고 있습니다.
          </div>
          <div>
            2014년 설립한 케이잡스는 중·장년 생애설계 전직지원 컨설팅과 교육,<br />
            초·중·고·대학생, 청년들의 진로코칭과 취업 컨설팅,<br />
            기업 HRD 교육체계 수립 컨설팅 및 임직원 교육,<br />
            채용박람회와 취업캠프, MICE 공공 지자체 일자리 창출,<br />
            고용노동부 취업지원 사업에 적극 앞장서고 있습니다.
          </div>
          <div>
            최고의 결과를 향하여 최선의 성공을 이루는 케이잡스가 되기 위해<br />
            오늘도 열심히 달려가겠습니다.
          </div>
          <div>
            앞으로도 변함없는 관심과 애정어린 성원을 부탁드립니다.<br />
            감사합니다
          </div>
          <div style={{marginTop: 50, fontWeight: "700"}}>케이잡스 대표이사</div>
        </section>
      </article>
    </main>
    </>
  )
}