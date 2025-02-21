export default function JoinUniversity(){

  return(
    <main style={{backgroundColor: "rgba(0,0,0,.1)"}}>
      <article style={{width: "72%", display: "flex", flexDirection: "column", rowGap: "3vh"}}>
      <h1>대학 협약 신청</h1>
      <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 대학 정보를 입력해 주세요.</desc>
      <form style={{width: "100%", padding: 18, borderRadius: 10, backgroundColor: "white"}}>

      <section style={{display: "flex", flexDirection: "column", rowGap: "5vh"}}>
        <div style={{display: "flex", columnGap: "1.5%"}}>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>대학명*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>Fax*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>Homepage*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
        </div>

        <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
          <div style={{width: "100%"}}>주소*</div>
          <div style={{width: "14%", display: "flex", columnGap: "3%"}}>
            <input style={{width: "60%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            <button style={{width: "40%", color: "white", backgroundColor: "rgb(99,102,241)"}}>검색</button>
          </div>
          <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="주소" />
          <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="상세주소" />
        </div>

        <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
          <h4>담당자 정보</h4>
          <div style={{display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
              <div>담당자명*</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
              <div>담당자 Email*</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
              <div>담당자 전화번호*</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
          </div>
          </div>
          <button style={{width: "8%", padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}}>💾 파일선택</button>
          <input type="submit" value="Confirm" style={{padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}} />
          </section>
          D-2 / D-4 체크는 대학에서 하는게 아니지 않나용?
      </form>
      </article>
    </main>
  )
}