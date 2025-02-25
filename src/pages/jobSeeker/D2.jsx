import { useState } from "react";

export default function D2(){
  const [isFile, setIsFile] = useState();
  const [isSelected, setIsSelected] = useState();
  return(
    <main>
    <article style={{width: "72%", display: "flex", flexDirection: "column", rowGap: "3vh"}}>
      <h1>유학/어학 비자 신청</h1>
      <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 비자 정보를 입력해 주세요.</desc>

      <select onChange={e=>setIsSelected(e.target.value)} style={{height: "5vh", padding: "0vw 7vw", border: "solid rgba(128,150,180,1) 1px", borderRadius: 50, textAlign: "center",}}>
        <option disabled selected>유학(D-2) 비자와 어학(D-2) 비자 중 신청하실 비자를 선택해주세요.</option>
        <option value="d2">유학(D-2) 비자 신청</option>
        <option value="d4">어학(D-4) 비자 신청</option>
      </select>

      <form style={{width: "100%", padding: 18, borderRadius: 10, backgroundColor: "white"}}>
      {isSelected=="d2"?
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
        <h4 style={{paddingBottom: 50}}>8개 서류(학교 표준입학허가서, 최종학력 증명서, 사증발급인정신청서(양식 첨부), 여권사본, 재정증명서(은행 잔고증명서), 사진, 한국어능력 입증자료(TOPIK 성적표), 가족관계 입증서류)를 스캔하여 파일로 첨부해주세요.</h4>
        </section>
        : isSelected=="d4"?
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
        <h4 style={{paddingBottom: 50}}>7개 서류(사증발급인정신청서(양식 첨부), 여권사본, 입학 허가서, 학비 납입증명서, 재정증명서(은행 잔고증명서), 사진, 최종학력 증명서)를 스캔하여 파일로 첨부해주세요.</h4>
        </section>
        : null}

        <section style={{display: "flex", flexDirection: "column", rowGap: "5vh"}}>
          <input id="file" type="file" style={{width: 0, height: 0}} onChange={e=>{
            setIsFile(String(e.target.value));
          }} />
          <label for="file"
          style={isFile? {padding: 7,} : {width: "10%", padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}}>
            {isFile?  isFile : "💾 파일선택"}
          </label>
          <input type="submit" value="Confirm" style={{padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}} />
        </section>
      </form>
    </article>
    </main>
  )
}