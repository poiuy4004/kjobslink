import { useState } from "react";

export default function JobPost(){
  const [isFile,setIsFile]=useState();
  return(
    <main>
    <article style={{width: "72%", display: "flex", flexDirection: "column", rowGap: "3vh"}}>
      <h1>채용공고 등록</h1>
      <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 공고 정보를 입력해 주세요.</desc>
      <form style={{width: "100%", padding: 18, borderRadius: 10, backgroundColor: "white"}}>

      <section style={{display: "flex", flexDirection: "column", rowGap: "5vh"}}>
        
      <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
        <h4>채용 제목</h4>
        <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
      </div>





          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>직무구분*</div>
            <div style={{display: "flex", columnGap: "1.5%"}}>
              <select style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}}>
                <option>옵션 1</option>
                <option>옵션 2</option>
                <option>옵션 3</option>
              </select>
              <select style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}}>
                <option>옵션 1</option>
                <option>옵션 2</option>
                <option>옵션 3</option>
              </select>
            </div>
          </div>


        <div style={{display: "flex", columnGap: "1.5%"}}>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>희망인원*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>희망연령</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>희망국가</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>급여</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
        </div>
        <div style={{display: "flex", columnGap: "1.5%"}}>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>필요언어*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
            <div>근무시간*</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
          </div>
        </div>

        <div style={{display: "flex", columnGap: "1.5%"}}>
        <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
          <div>기숙사 제공 여부</div>
          <div style={{display: "flex", columnGap: "1vw"}}>
          <span><input type="radio" value="yes" /><span>yes</span></span>
          <span><input type="radio" value="no" /><span>no</span></span>
          </div>
        </div>
        <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
          <div>식사 제공 여부</div>
          <div style={{display: "flex", columnGap: "1vw"}}>
          <span><input type="radio" value="yes" /><span>yes</span></span>
          <span><input type="radio" value="no" /><span>no</span></span>
          </div>
        </div>
        <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
          <div>초과근무 제공 여부</div>
          <div style={{display: "flex", columnGap: "1vw"}}>
          <span><input type="radio" value="yes" /><span>yes</span></span>
          <span><input type="radio" value="no" /><span>no</span></span>
          </div>
        </div>
        </div>

        <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
          <h4>채용회사 정보</h4>
          <desc>등록하신 고객사를 선택해주세요. 해당 고객사의  정보로 채용공고가 등록됩니다.</desc>
          <select style={{width: "100%", height: 55, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}}>
            <option disabled selected>고객사를 선택해주세요.</option>
            <option>고객사 1</option>
            <option>고객사 2</option>
            <option>고객사 3</option>
          </select>
          <div style={{display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
              <div>회사명*</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
              <div>사업자등록번호*</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
              <div>외국인 고용자 수</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
              <div>외국인 고용자 비자별 인원</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
            <div style={{width: "100%", display: "flex", flexDirection: "column", rowGap: "1vh"}}>
              <div>외국인 고용자 국적</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} />
            </div>
          </div>
        </div>

          <input id="file" type="file" style={{width: 0, height: 0}} onChange={e=>{
            setIsFile(String(e.target.value));
          }} />
          <label for="file"
          style={isFile? {width: "8%", padding: 7,} : {width: "8%", padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}}>
            {isFile?  isFile : "💾 파일선택"}
          </label>
          <input type="submit" value="Confirm" style={{padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}} />
        </section>

      </form>
      </article>
    </main>
  )
}