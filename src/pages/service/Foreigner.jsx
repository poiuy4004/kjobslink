export default function Foreigner(){

  return(
    <main>
      <article style={{width: "72%", display: "flex", flexDirection: "column", rowGap: "3vh"}}>
      <h1>외국인 등록증 발급을 위한 방문신청</h1>
      {/* <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 이력서 정보를 입력해 주세요.</desc> */}
      <form style={{width: "100%", padding: "3vh 1.5vw", borderRadius: 10, backgroundColor: "white"}}>

        <section style={{display: "flex", flexDirection: "column", rowGap: "5vh"}}>

          <div style={{width: "100%", display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "100%"}}>
              <div style={{display: "flex", columnGap: "1vw"}}><div style={{fontWeight: "700"}}>이름*</div><desc style={{color: "gray"}}>Name in Korean</desc></div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="홍길동" />
            </div>
            <div style={{width: "100%"}}>
              <div style={{display: "flex", columnGap: "1vw"}}><div style={{fontWeight: "700"}}>영문명*</div><desc style={{color: "gray"}}>Full Name in English</desc></div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="HongGilDong" />
            </div>
            <div style={{width: "100%"}}>
              <div style={{display: "flex", columnGap: "1vw"}}><div style={{fontWeight: "700"}}>생년월일*</div><desc style={{color: "gray"}}>Date of Birth</desc></div>
              <input type="date" style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="M01234567" />
            </div>
            <div style={{width: "100%"}}>
              <div style={{display: "flex", columnGap: "1vw"}}><div style={{fontWeight: "700"}}>연락처*</div><desc style={{color: "gray"}}>Cell Phone no.</desc></div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="+82)10-1234-5678" />
            </div>
          </div>

          <div style={{width: "100%", display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "100%"}}>
              <div style={{display: "flex", columnGap: "1vw"}}><div style={{fontWeight: "700"}}>국적*</div><desc style={{color: "gray"}}>Nationality</desc></div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="Philippines" />
            </div>
            <div style={{width: "100%"}}>
              <div style={{display: "flex", columnGap: "1vw"}}><div style={{fontWeight: "700"}}>비자종류*</div><desc style={{color: "gray"}}>Type of Visa</desc></div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="E-7-3" />
            </div>
            <div style={{width: "100%"}}>
              <div style={{display: "flex", columnGap: "1vw"}}><div style={{fontWeight: "700"}}>여권번호*</div><desc style={{color: "gray"}}>Passport no.</desc></div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="M01234567" />
            </div>
          </div>

          <div style={{width: "100%", display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "50%"}}>
              <div style={{display: "flex", columnGap: "1vw"}}><div style={{fontWeight: "700"}}>방문희망일*</div><desc style={{color: "gray"}}>Date of Visit</desc></div>
              <input type="date" style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="adress@google.com" />
            </div>
            <div style={{width: "50%"}}>
              <div style={{display: "flex", columnGap: "1vw"}}><div style={{fontWeight: "700"}}>방문희망시간*</div><desc style={{color: "gray"}}>Time of Visit</desc></div>
              <select style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="adress@google.com">
                <option disabled selected>방문 희망 시간대를 선택해주세요.</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

        </section>

        <section style={{paddingTop: "7vh", display: "flex", flexDirection: "column", rowGap: 25}}>
          {/* <button style={{width: "8%", padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}}>💾 파일선택</button> */}
          <input type="submit" value="Confirm" style={{padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}} />
        </section>

      </form>
      </article>
    </main>
  )
}
          // 방문희망일자 방문희망시간