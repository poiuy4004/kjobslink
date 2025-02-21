export default function D2(){

  return(
    <main>
    <article style={{width: "72%", display: "flex", flexDirection: "column", rowGap: "3vh"}}>
      <h1>유학/어학 비자 신청</h1>
      <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 비자 정보를 입력해 주세요.</desc>

      <select style={{height: "5vh", padding: "0vw 7vw", border: "solid rgba(128,150,180,1) 1px", borderRadius: 50, textAlign: "center",}}>
        <option disabled selected>유학(D-2) 비자와 어학(D-2) 비자 중 신청하실 비자를 선택해주세요.</option>
        <option>유학(D-2) 비자 신청</option>
        <option>어학(D-4) 비자 신청</option>
      </select>

      <form style={{width: "100%", padding: 18, borderRadius: 10, backgroundColor: "white"}}>
      <section style={{display: "flex", flexDirection: "column", rowGap: "5vh"}}>
        <div style={{display: "flex", columnGap: "1.5%"}}>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>이름*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>영문명*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>모국어명</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
        </div>
        <div style={{display: "flex", columnGap: "1.5%"}}>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>Phone*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>Email*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>Fax</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
        </div>

        <h4>여권, 사증발급신청서, 여권용 사진, 표준입학허가서, 신분증, 을 스캔하여 파일로 첨부해주세요.</h4>

          <button style={{width: "8%", padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}}>💾 파일선택</button>
          <input type="submit" value="Confirm" style={{padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}} />
        </section>
      </form>
    </article>
    </main>
  )
}