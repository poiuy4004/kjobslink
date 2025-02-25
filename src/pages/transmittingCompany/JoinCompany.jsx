import { useState } from "react";
export default function JoinCompany(){
  const [isFile,setIsFile] = useState();
  return(
    <main>
      <article style={{width: "72%", display: "flex", flexDirection: "column", rowGap: "3vh"}}>
      <h1>송출기업 협약 신청</h1>
      <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 기업 정보를 입력해 주세요.</desc>
      <form style={{width: "100%", padding: 18, borderRadius: 10, backgroundColor: "white"}}>

      <section style={{display: "flex", flexDirection: "column", rowGap: "5vh"}}>
        <div style={{display: "flex", columnGap: "1.5%"}}>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>국가*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>회사명*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>사업자등록번호</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>대표자명*</div>
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
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>Homepage</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
        </div>


        <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>주소*</div>
          <div style={{width: "14%", display: "flex", columnGap: "3%"}}>
            <input style={{width: "60%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            <button style={{width: "40%", color: "white", backgroundColor: "rgb(99,102,241)"}}>검색</button>
          </div>
          <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
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

        <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
        <h4>기업 상세 정보</h4>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>Licenses</div>
            <textarea style={{width: "100%", height: 100, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>업력</div>
            <textarea style={{width: "100%", height: 100, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
        </div>

          <input id="file" type="file" style={{width: 0, height: 0}} onChange={e=>{
            setIsFile(String(e.target.value));
          }} />
          <label for="file"
          style={isFile? {width: "8%", padding: 7,} : {width: "8%", padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}}>
            {isFile?  isFile : "💾 파일선택"}
          </label>
          <button style={{padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}}>Confirm</button>

          </section>
      </form>
      </article>
    </main>
  )
}