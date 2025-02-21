import { useState } from "react";
export default function Smart(){
  const [resumeImg, setResumeImg] = useState("https://image.idus.com/image/files/f7ad6efa2937405a93eadc1ef0a7e325_400.jpg")
  function uploadImg(e){
    let resumeImgURL = URL.createObjectURL(e.target.files[0])
    setResumeImg(resumeImgURL)
  }
  return(
    
    <main>
      <article style={{width: "72%"}}>
      <h1>스마트 추천 인재</h1>
      <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 이력서 정보를 입력해 주세요.</desc>
      <form style={{width: "100%", padding: 18, borderRadius: 10, backgroundColor: "white"}}>

        <section style={{display: "flex", }}>
        <div style={{position: "relative", width: "30%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <input type="file" accept="image/jpg, image/jpeg, image/png" style={{width: "55%", height: "100%", border: ["solid", "black", "1px"]}} onChange={e=>uploadImg(e)} />
          <img width="55%" height="100%" src={resumeImg} style={{position: "absolute", pointerEvents: "none"}} />
        </div>

        <div style={{width: "70%"}}>
          <div style={{width: "100%", display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "100%"}}>
              <div>이름*</div>
              <p>홍길동</p>
            </div>
            <div style={{width: "100%"}}>
              <div>영문명*</div>
              <p>HongGilDong</p>
            </div>
            <div style={{width: "100%"}}>
              <div>모국어명</div>
              <p>ฮงกิลดง</p>
            </div>
          </div>

          <div style={{width: "100%", display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "100%"}}>
              <div>생년월일*</div>
              <p>19870227</p>
            </div>
            <div style={{width: "100%"}}>
              <div>여권번호*</div>
              <p>M01234567</p>
            </div>
          </div>

          <div style={{width: "100%", display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "100%"}}>
              <div>연락처</div>
              <p>+82)10-1234-5678</p>
            </div>
            <div style={{width: "100%"}}>
              <div>Email</div>
              <p>adress@google.com</p>
            </div>
          </div>

          <div style={{width: "100%"}}>
            <div>국내 거주 주소</div>
            <p>ㅇㅇ시 ㅇㅇ동 ㅇㅇ로 123, 00동 00호</p>
          </div>

        </div>

        </section>

        <section>
          <div>학력사항</div>
          <div style={{display: "flex", fontWeight: "700", backgroundColor: "rgba(99,102,241,.2)"}}>
            <div style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>기간</div>
            <div style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}}>학교명</div>
            <div style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}}>학과(전공)</div>
            <div style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}}>졸업여부</div>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>2025.03~2029.02</p>
            <p style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}}>OO학교</p>
            <p style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}}>OO학</p>
            <p style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}}>졸업</p>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>2025.03~2029.02</p>
            <p style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}}>OO학교</p>
            <p style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}}>OO학</p>
            <p style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}}>졸업</p>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>2025.03~2029.02</p>
            <p style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}}>OO학교</p>
            <p style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}}>OO학</p>
            <p style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}}>졸업</p>
          </div>
        </section>

        <section>
          <div>경력사항</div>
          <div style={{display: "flex", fontWeight: "700", backgroundColor: "rgba(99,102,241,.2)"}}>
            <div style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>기간</div>
            <div style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}}>업체명</div>
            <div style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}}>부서</div>
            <div style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}}>직위</div>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>2025.03~2029.02</p>
            <p style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOOO회사</p>
            <p style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}}>OO부</p>
            <p style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}}>사원</p>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>2025.03~2029.02</p>
            <p style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOOO회사</p>
            <p style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}}>OO부</p>
            <p style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}}>사원</p>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>2025.03~2029.02</p>
            <p style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOOO회사</p>
            <p style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}}>OO부</p>
            <p style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}}>사원</p>
          </div>
        </section>

        <section>
          <div>자격증</div>
          <div style={{display: "flex", fontWeight: "700", backgroundColor: "rgba(99,102,241,.2)"}}>
            <div style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>취득일</div>
            <div style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}}>자격증명</div>
            <div style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}}>발행기관</div>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>20250318</p>
            <p style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOOO자격 1급</p>
            <p style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOOO청</p>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>20250318</p>
            <p style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOOO자격 1급</p>
            <p style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOOO청</p>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>20250318</p>
            <p style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOOO자격 1급</p>
            <p style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOOO청</p>
          </div>
        </section>

        <section>
          <div>수상경력 및 기타이력</div>
          <div style={{display: "flex", fontWeight: "700", backgroundColor: "rgba(99,102,241,.2)"}}>
            <div style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>수상일자</div>
            <div style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}}>수상경력 및 기타이력</div>
            <div style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}}>발행기관</div>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>20250318</p>
            <p style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOO 최우수상</p>
            <p style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOO협회</p>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>20250318</p>
            <p style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOO 최우수상</p>
            <p style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOO협회</p>
          </div>
          <div style={{display: "flex",}}>
            <p style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>20250318</p>
            <p style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOO 최우수상</p>
            <p style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}}>OOO협회</p>
          </div>
        </section>

      </form>
      </article>
    </main>
    
  )
}