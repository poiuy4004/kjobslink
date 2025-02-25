import { useState } from "react"

export default function VisaReq(){
  const [isFile, setIsFile] = useState();
  const [isSelected, setIsSelected] = useState();
  return(
    <main>
    <article style={{width: "72%", display: "flex", flexDirection: "column", rowGap: "3vh"}}>
      <h1>비자 업무 신청</h1>
      <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 비자 정보를 입력해 주세요.</desc>

      <select onChange={e=>setIsSelected(e.target.value)} style={{height: "5vh", padding: "0vw 7vw", border: "solid rgba(128,150,180,1) 1px", borderRadius: 50, textAlign: "center",}}>
        <option disabled selected>신청하실 비자 업무 서비스를 선택해주세요.</option>
        <option value="req">비자 신청</option>
        <option value="extend">비자 연장</option>
        <option value="switch">비자 전환</option>
      </select>

      <form style={{width: "100%", padding: 18, borderRadius: 10, backgroundColor: "white"}}>
      {isSelected=="req"?
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
        </div>
        <h4 style={{paddingBottom: 33}}>7개의 문서(사증발급인정신청서(양식 첨부), 이력서(양식 첨부), 여권사본, 학력증명서, 경력증명서, 전문자격증, 건강진단서)를 스캔하여 파일로 첨부해주세요.</h4>
      </section>
      : isSelected=="extend"?
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
        </div>
        <h4 style={{paddingBottom: 33}}>7개의 문서(통합신청서(양식 첨부), 여권사본, 외국인등록증, 근로계약서, 재직증명서, 외국인직업신고서(양식 첨부), 체류지 입증서류(양식 첨부))를 스캔하여 파일로 첨부해주세요.</h4>
      </section>
      : isSelected=="switch"?
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
        </div>
        <h4 style={{paddingBottom: 33}}>4개의 문서(통합신청서(양식 첨부), 여권사본, 표준규격 사진, 고용계약서)를 스캔하여 파일로 첨부해주세요.</h4>
      </section>
      : null}

      <section style={{display: "flex", flexDirection: "column", rowGap: "5vh"}}>
        <div>
          <input id="file" type="file" style={{width: 0, height: 0}} onChange={e=>{
            setIsFile(String(e.target.value));
          }} />
          <label for="file"
          style={isFile? {width: "8%", padding: 7,} : {width: "8%", padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}}>
            {isFile?  isFile : "💾 파일선택"}
          </label>
        </div>
        <input type="submit" value="Confirm" style={{padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}} />
      </section>
      </form>
    </article>
    </main>
  )
}