import { useState } from "react";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

export default function Resume(){
  const [resumeImg, setResumeImg] = useState("https://image.idus.com/image/files/f7ad6efa2937405a93eadc1ef0a7e325_400.jpg")
  function uploadImg(e){
    console.log(e.target.files[0])
    let resumeImgURL = URL.createObjectURL(e.target.files[0])
    setResumeImg(resumeImgURL)
  }
  return(
    <>
    <Header />
    <main style={{backgroundColor: "rgba(0,0,0,.1)"}}>
      <article style={{width: "72%"}}>
      <h1>이력서 등록</h1>
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
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="홍길동" />
            </div>
            <div style={{width: "100%"}}>
              <div>영문명*</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="HongGilDong" />
            </div>
            <div style={{width: "100%"}}>
              <div>모국어명</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="ฮงกิลดง" />
            </div>
          </div>

          <div style={{width: "100%", display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "100%"}}>
              <div>생년월일*</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="20250212" />
            </div>
            <div style={{width: "100%"}}>
              <div>여권번호*</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="M01234567" />
            </div>
          </div>

          <div style={{width: "100%", display: "flex", columnGap: "1.5%"}}>
            <div style={{width: "100%"}}>
              <div>연락처</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="+82)10-1234-5678" />
            </div>
            <div style={{width: "100%"}}>
              <div>Email</div>
              <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="adress@google.com" />
            </div>
          </div>

          <div style={{width: "100%"}}>
            <div>국내 거주 주소</div>
            <input style={{width: "100%", height: 33, padding: 10, border: ["solid", "rgba(128,150,180,1)", "1px"], borderRadius: 3}} placeholder="OO시 OO동 OO로 123" />
          </div>

        </div>

        </section>

        <section>
          <div>학력사항</div>
          <div style={{display: "flex", fontWeight: "700", backgroundColor: "rgba(0,0,0,.1)"}}>
            <div style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>기간</div>
            <div style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}}>학교명</div>
            <div style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}}>학과(전공)</div>
            <div style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}}>졸업여부</div>
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="2025.03~2029.02" />
            <input style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OO학교" />
            <input style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OO학" />
            <input style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="졸업/재학/중퇴" />
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="2025.03~2029.02" />
            <input style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OO학교" />
            <input style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OO학" />
            <input style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="졸업/재학/중퇴" />
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="2025.03~2029.02" />
            <input style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OO학교" />
            <input style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OO학" />
            <input style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="졸업/재학/중퇴" />
          </div>
        </section>

        <section>
          <div>경력사항</div>
          <div style={{display: "flex", fontWeight: "700", backgroundColor: "rgba(0,0,0,.1)"}}>
            <div style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>기간</div>
            <div style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}}>업체명</div>
            <div style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}}>부서</div>
            <div style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}}>직위</div>
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="2025.03~2029.02" />
            <input style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOOO회사" />
            <input style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OO부" />
            <input style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="사원/대리/과장" />
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="2025.03~2029.02" />
            <input style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOOO회사" />
            <input style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OO부" />
            <input style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="사원/대리/과장" />
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="2025.03~2029.02" />
            <input style={{padding: 10, width: "37%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOOO회사" />
            <input style={{padding: 10, width: "33%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OO부" />
            <input style={{padding: 10, width: "10%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="사원/대리/과장" />
          </div>
        </section>

        <section>
          <div>자격증</div>
          <div style={{display: "flex", fontWeight: "700", backgroundColor: "rgba(0,0,0,.1)"}}>
            <div style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>취득일</div>
            <div style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}}>자격증명</div>
            <div style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}}>발행기관</div>
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="20250318" />
            <input style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOOO자격 1급" />
            <input style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOOO청" />
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="20250318" />
            <input style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOOO자격 1급" />
            <input style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOOO청" />
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="20250318" />
            <input style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOOO자격 1급" />
            <input style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOOO청" />
          </div>
        </section>

        <section>
          <div>수상경력 및 기타이력</div>
          <div style={{display: "flex", fontWeight: "700", backgroundColor: "rgba(0,0,0,.1)"}}>
            <div style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}}>수상일자</div>
            <div style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}}>수상경력 및 기타이력</div>
            <div style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}}>발행기관</div>
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="20250318" />
            <input style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOO 최우수상" />
            <input style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOO협회" />
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="20250318" />
            <input style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOO 최우수상" />
            <input style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOO협회" />
          </div>
          <div style={{display: "flex",}}>
            <input style={{padding: 10, width: "20%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="20250318" />
            <input style={{padding: 10, width: "50%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOO 최우수상" />
            <input style={{padding: 10, width: "30%", textAlign: "center", border: ["solid", "black", "1px"]}} placeholder="OOO협회" />
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