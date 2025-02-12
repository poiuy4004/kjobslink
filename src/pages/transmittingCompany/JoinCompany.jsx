import { useEffect } from "react";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

export default function JoinCompany(){

  return(
    <>
    <Header />
    <main style={{backgroundColor: "rgba(0,0,0,.1)"}}>
      <article style={{width: "72%"}}>
      <h1>파트너 등록</h1>
      <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 기업 정보를 입력해 주세요.</desc>
      <form style={{width: "100%", padding: 18, borderRadius: 10, backgroundColor: "white"}}>

        <section>
        <div style={{display: "flex", columnGap: "1.5%"}}>
          <div style={{width: "100%"}}>
            <div>회사명*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%"}}>
            <div>사업자등록번호</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%"}}>
            <div>대표자명*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%"}}>
            <div>Phone*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
        </div>
        <div style={{display: "flex", columnGap: "1.5%"}}>
          <div style={{width: "100%"}}>
            <div>Email*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%"}}>
            <div>Fax</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%"}}>
            <div>Homepage</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%"}} />
        </div>
        <div style={{display: "flex", columnGap: "1.5%"}}>
          <div style={{width: "100%"}}>
            <div>업종*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%"}}>
            <div>업태*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%"}} />
        </div>
        <div style={{}}>
          <div style={{width: "100%"}}>주소</div>
          <div style={{width: "14%", display: "flex", columnGap: "3%"}}>
            <input style={{width: "60%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            <button style={{width: "40%", color: "white", backgroundColor: "rgb(99,102,241)"}}>검색</button>
          </div>
          <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
        </div>
        </section>

        <section>
          <div>담당자 정보</div>
          <div style={{display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "100%"}}>
              <div>담당자명*</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%"}}>
              <div>담당자 Email*</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%"}}>
              <div>담당자 전화번호*</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%"}} />
          </div>
        </section>

        <section>
          <div>기업 상세 정보</div>
          <div style={{display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "100%"}}>
              <div>전체 직원 수</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%"}}>
              <div>외국인 고용자수</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%"}}>
              <div>외국인 고용자 비자별 인원</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%"}}>
              <div>외국인 고용자 국적</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
          </div>
        </section>

        <section style={{display: "flex", flexDirection: "column"}}>
          <button style={{width: "8%", padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}}>💾 파일선택</button>
          <button style={{padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}}>Confirm</button>
        </section>

      </form>
      </article>
    </main>
    <Footer />
    </>
  )
}