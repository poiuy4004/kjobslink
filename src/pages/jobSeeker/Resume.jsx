import { useState } from "react";
export default function Resume(){
  const [isFile, setIsFile] = useState();
  const [resumeImg, setResumeImg] = useState("https://image.idus.com/image/files/f7ad6efa2937405a93eadc1ef0a7e325_400.jpg")
  function uploadImg(e){
    let resumeImgURL = URL.createObjectURL(e.target.files[0])
    setResumeImg(resumeImgURL)
  }
  return(
    <main>
      <article style={{width: "72%"}}>
      <h1>이력서 등록</h1>
      <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 이력서 정보를 입력해 주세요.</desc>
      <form style={{width: "100%", padding: 18, display: "flex", flexDirection: "column", rowGap: 37, borderRadius: 10, backgroundColor: "white"}}>
      <section>
      <h4 style={{padding: "5px 10px", backgroundColor: "rgba(128,128,128,.3)"}}>1. 인적사항/ PERSONAL DETAILS</h4>
      <div style={{display: "flex",}}>
        <div style={{position: "relative", width: "28%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <input id="profileImg" type="file" accept="image/jpg, image/jpeg, image/png" style={{width: 0, height: 0,}} onChange={e=>uploadImg(e)} />
          <label for="profileImg" style={{width: "100%", height: "100%", borderRight: ["solid", "black", "1px"]}} />
          <img height="100%" src={resumeImg} style={{position: "absolute", pointerEvents: "none"}} />
        </div>
        <div style={{width: "72%"}}>
          <div style={{paddingBottom: "5px", borderBottom: "solid black 1px"}}>1.1 여권에 기재된 영문 성명 Full Name in English (as shown in passport)</div>
          <div style={{display: "flex", padding: "3px 5px", borderBottom: "solid black 1px"}}>
            <div style={{width: "50%", borderRight: "solid black 1px"}}>
              <label>성 Family Name</label>
              <input style={{width: "80%", textAlign: "right", padding: "3px 5px"}} />
            </div>
            <div style={{width: "50%", paddingLeft: "5px"}}>
              <label>명 Given Names</label>
              <input style={{width: "80%", textAlign: "right", padding: "3px 5px"}} />
            </div>
          </div>
          <div style={{display: "flex", padding: "3px 5px", borderBottom: "solid black 1px"}}>
            <div style={{width: "50%", borderRight: "solid black 1px"}}>
              <label>1.2 한글표기성명 Romanized Name</label>
              <input style={{width: "80%", textAlign: "right", padding: "3px 5px"}} />
            </div>
            <div style={{width: "50%", paddingLeft: "5px"}}>
              <div>1.3 성별 Sex</div>
              <div style={{justifyContent: "right", display: "flex", padding: "3px 5px", columnGap: 37}}>
                <label for="male">남성/Male <input id="male" name="sex" value="male" type="radio" /></label>
                <label for="female">여성/Female <input id="female" name="sex" value="female" type="radio" /></label>
              </div>
            </div>
          </div>
          <div style={{display: "flex", padding: "3px 5px", borderBottom: "solid black 1px"}}>
            <div style={{width: "50%", borderRight: "solid black 1px"}}>
              <label>1.4 생년월일 Date of Birth(yyyy/mm/dd)</label>
              <input style={{width: "80%", textAlign: "right", padding: "3px 5px"}} />
            </div>
            <div style={{width: "50%", paddingLeft: "5px"}}>
              <label>1.5 국적 Nationality</label>
              <input style={{width: "80%", textAlign: "right", padding: "3px 5px"}} />
            </div>
          </div>
          <div style={{display: "flex", padding: "3px 5px", borderBottom: "solid black 1px"}}>
            <div style={{width: "50%", borderRight: "solid black 1px"}}>
              <label>1.6 출생국가 Country of Birth</label>
              <input style={{width: "80%", textAlign: "right", padding: "3px 5px"}} />
            </div>
            <div style={{width: "50%", paddingLeft: "5px"}}>
              <label>1.7 국가신분증번호 National Identity No.</label>
              <input style={{width: "80%", textAlign: "right", padding: "3px 5px"}} />
            </div>
          </div>
        </div>
      </div>
      </section>

      <section>
      <h4 style={{padding: "5px 10px", backgroundColor: "rgba(128,128,128,.3)"}}>2. 연락처/ CONTACT INFORMATION</h4>
      <div>
        <label>2.1 본국 주소 Home Country Address of the Applicant</label>
        <input style={{width: "100%", padding: "3px 5px", borderBottom: "solid black 1px"}} />
      </div>
      <div>
        <label>2.2 현 거주지 Current Residential Address *현 거주지가 본국 주소와 다를 경우 기재/ Please write the current address if different from above</label>
        <input style={{width: "100%", padding: "3px 5px", borderBottom: "solid black 1px"}} />
      </div>
      <div style={{display: "flex", borderBottom: "solid black 1px"}}>
        <label style={{width: "50%", borderRight: "solid black 1px",}}>2.3 휴대전화 Cell Phone No.</label>
        <input style={{width: "50%", borderRight: "solid black 1px", padding: "3px 5px"}} />
        <label style={{width: "50%", borderRight: "solid black 1px", paddingLeft: "5px"}}>2.4 일반전화 Telephone No.</label>
        <input style={{width: "50%", borderRight: "solid black 1px", padding: "3px 5px"}} />
      </div>
      <div style={{display: "flex", borderBottom: "solid black 1px"}}>
        <label style={{width: "25%", borderRight: "solid black 1px",}}>2.5 이메일 E-mail</label>
        <input style={{width: "75%", padding: "3px 5px", borderRight: "solid black 1px",}} />
      </div>
      <div style={{display: "flex", borderBottom: "solid black 1px"}}>
        2.6 비상시 연락처 Emergency Contact Information
      </div>
      <div style={{display: "flex", borderBottom: "solid black 1px"}}>
        <div style={{width: "50%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
          <label>a) 성명 Full Name in English</label>
          <input style={{padding: "3px 5px", textAlign: "right"}} />
        </div>
        <div style={{width: "50%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
          <label style={{paddingLeft: "5px"}}>b) 거주국가 Country of Residence</label>
          <input style={{padding: "3px 5px", textAlign: "right"}} />
        </div>
      </div>
      <div style={{display: "flex", borderBottom: "solid black 1px"}}>
        <div style={{width: "50%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
          <label>c) 전화번호Telephone No</label>
          <input style={{padding: "3px 5px", textAlign: "right"}} />
        </div>
        <div style={{width: "50%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
          <label style={{paddingLeft: "5px"}}>d) 관계Relationship to the applicant</label>
          <input style={{padding: "3px 5px", textAlign: "right"}} />
        </div>
      </div>
      </section>

      <section>
        <h4 style={{padding: "5px 10px", backgroundColor: "rgba(128,128,128,.3)"}}>3. 혼인사항 및 가족사항/ MARITAL STATUS AND FAMILY DETAILS</h4>
        <div style={{display: "flex", borderBottom: "solid black 1px"}}>
          3.1 현재 혼인사항Current Marital Status
        </div>
        <div style={{display: "flex", justifyContent: "space-around", borderBottom: "solid black 1px"}}>
          <label for="married">기혼Married<input id="married" name="marital" type="radio" /></label><label for="divorced">이혼Divorced<input id="divorced" name="marital" type="radio" /></label><label for="single">미혼Single<input id="single" name="marital" type="radio" /></label>
        </div>
        <div style={{borderBottom: "solid black 1px"}}>
          3.2 배우자 인적사항 Personal Information of the applicant’s Spouse<br />
          *기혼으로 표기한 경우에만 기재 If ‘Married’, please provide details of your spouse.
        </div>
        <div style={{display: "flex", borderBottom: "solid black 1px"}}>
          <div style={{width: "50%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label>a) 성Family Name (in English)</label>
            <input style={{padding: "3px 5px", textAlign: "right"}} />
          </div>
          <div style={{width: "50%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label style={{paddingLeft: "5px"}}>b) 명Given Names (in English)</label>
            <input style={{padding: "3px 5px", textAlign: "right"}} />
          </div>
        </div>
        <div style={{display: "flex", borderBottom: "solid black 1px"}}>
          <div style={{width: "50%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label>c) 생년월일Date of Birth (yyyy/mm/dd)</label>
            <input style={{padding: "3px 5px", textAlign: "right"}} />
          </div>
          <div style={{width: "50%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label style={{paddingLeft: "5px"}}>d) 국적Nationality</label>
            <input style={{padding: "3px 5px", textAlign: "right"}} />
          </div>
        </div>
        <div style={{display: "flex", borderBottom: "solid black 1px"}}>
          <div style={{width: "50%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label>e) 거주지Residential Address</label>
            <input style={{padding: "3px 5px", textAlign: "right"}} />
          </div>
          <div style={{width: "50%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label style={{paddingLeft: "5px"}}>f) 연락처Contact No.</label>
            <input style={{padding: "3px 5px", textAlign: "right"}} />
          </div>
        </div>
      </section>

      <section>
        <div style={{borderBottom: "solid black 1px"}}>
          3.3 자녀 유무 Does the applicant have children?
        </div>
        <div style={{display: "flex", justifyContent: "space-around", borderBottom: "solid black 1px"}}>
          <label for="no">없음No <input id="no" name="children" type="radio" /></label><label for="yes">있음Yes <input id="yes" name="children" type="radio" /></label>
        </div>
      </section>

      <section>
        <h4 style={{padding: "5px 10px", backgroundColor: "rgba(128,128,128,.3)"}}>4. 여권정보/ PASSPORT INFORMATION</h4>
        <div style={{display: "flex", borderBottom: "solid black 1px"}}>
          <div style={{width: "100%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label>4.1 여권번호Passport No.</label>
            <input style={{padding: "3px 5px",}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label style={{paddingLeft: "5px"}}>4.2 발급국가 Country of Passport</label>
            <input style={{padding: "3px 5px",}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label style={{paddingLeft: "5px"}}>4.3 발급지 Place of Issue</label>
            <input style={{padding: "3px 5px",}} />
          </div>
        </div>
        <div style={{display: "flex", borderBottom: "solid black 1px"}}>
          <div style={{width: "100%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label>4.4 발급일자 Date of Issue</label>
            <input style={{padding: "3px 5px",}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label style={{paddingLeft: "5px"}}>4.5 기간만료일Date Of Expiry</label>
            <input style={{padding: "3px 5px",}} />
          </div>
          <div style={{width: "100%", display: "flex", flexDirection: "column", borderRight: "solid black 1px",}}>
            <label style={{paddingLeft: "5px"}}></label>
            {/* <input style={{padding: "3px 5px",}} /> */}
          </div>
        </div>
      </section>

      <section>
        <h4 style={{padding: "5px 10px", backgroundColor: "rgba(128,128,128,.3)"}}>5. 학력/ EDUCATION</h4>
        <div style={{borderBottom: "solid black 1px"}}>
          5.1 최종학력 What is the highest degree or level of education the the applicant has completed?
        </div>
        <div style={{display: "flex", justifyContent: "space-around", borderBottom: "solid black 1px"}}>
          <label for="doctoral">석사/박사 Master’s /Doctoral Degree <input id="doctoral" name="degree" type="radio" /></label><label for="bachelor">대졸 Bachelor’s Degree <input id="bachelor" name="degree" type="radio" /></label>
        </div>
        <div style={{display: "flex", justifyContent: "space-around", borderBottom: "solid black 1px"}}>
          <label for="high">고졸 High School Diploma <input id="high" name="degree" type="radio" /></label><label for="other">기타 Other <input id="other" name="degree" type="radio" /></label>
        </div>
        <div style={{display: "flex", borderBottom: "solid black 1px"}}>
          <div style={{width: "20%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label>졸업일<br />(From to Year)</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "30%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label>대학명<br />(Name of University)</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "30%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label>전공<br />(Major)</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "20%", display: "flex", flexDirection: "column", textAlign: "center",}}>
            <label>소재지<br />(City)</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
        </div>
      </section>

      <section>
        <h4 style={{padding: "5px 10px", backgroundColor: "rgba(128,128,128,.3)"}}>6. 자격증 / Certifications</h4>
        <div style={{display: "flex", borderBottom: "solid black 1px"}}>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label>자격증명(Certification Name)</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label>발급기관(Issuing Organization)</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label>취득날짜(Date of Achievement)</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center",}}>
            <label>고유번호(License Number)</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
        </div>
      </section>

      <section>
        <h4 style={{padding: "5px 10px", backgroundColor: "rgba(128,128,128,.3)"}}>7. 언어 / LANGUAGE</h4>
        <div style={{display: "flex", borderBottom: "solid black 1px"}}>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label>한국어 (Korean)</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label>영어 (English)</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label>그 외 언어 (other languages)</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center",}}>
            <label>비고</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
        </div>
      </section>

      <section>
        <h4 style={{padding: "5px 10px", backgroundColor: "rgba(128,128,128,.3)"}}>8. 경력/ WORK EXPERIENCE</h4>
        <div style={{borderBottom: "solid black 1px"}}>
          7-1. 총 경력기간 Total Professional Experience
        </div>
        <div style={{textAlign: "center", borderBottom: "solid black 1px"}}>
          <input style={{width: 18, textAlign: "right"}} />년 <input style={{width: 18, textAlign: "right"}} />개월 (<input style={{width: 18, textAlign: "right"}} />year <input style={{width: 18, textAlign: "right"}} />month)
        </div>
        <div style={{display: "flex", borderBottom: "solid black 1px"}}>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label style={{height: 50, alignContent: "center"}}>경력기간 Period</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label style={{height: 50, alignContent: "center"}}>회사명 Name of Company</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label style={{height: 50, alignContent: "center"}}>직위, 부서 및 업무 내용<br />Position, department and job content</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "25%", display: "flex", flexDirection: "column", textAlign: "center",}}>
            <label style={{height: 50, alignContent: "center"}}>급여 Monthly salary</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
        </div>
      </section>

      <section>
        <h4 style={{padding: "5px 10px", backgroundColor: "rgba(128,128,128,.3)"}}>9. 해외 근무 경험 / OVERSEAS WORK EXPERIENCE</h4>
        <div style={{display: "flex", borderBottom: "solid black 1px"}}>
          <div style={{width: "20%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label style={{height: 50, alignContent: "center"}}>회사명<br />Company Name</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "20%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label style={{height: 50, alignContent: "center"}}>국가명<br />Country Name</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "20%", display: "flex", flexDirection: "column", textAlign: "center", borderRight: "solid black 1px"}}>
            <label style={{height: 50, alignContent: "center"}}>근무기간<br />Employment Period</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
          <div style={{width: "40%", display: "flex", flexDirection: "column", textAlign: "center",}}>
            <label style={{height: 50, alignContent: "center"}}>직위, 부서 및 업무 내용<br />Position, department and job content</label>
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
            <input style={{height: 30, padding: "3px 5px", borderTop: "solid black 1px"}} />
          </div>
        </div>
      </section>

      <section style={{paddingTop: 30, paddingBottom: 30, display: "flex", flexDirection: "column", rowGap: 25}}>
        <input id="file" type="file" style={{width: 0, height: 0}} onChange={e=>{
          setIsFile(String(e.target.value));
        }} />
        <label for="file"
        style={isFile? {width: "10%", padding: 7,} : {width: "10%", padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}}>
          {isFile?  isFile : "💾 파일선택"}
        </label>
        <input type="submit" value="Confirm" style={{padding: 7, color: "white", backgroundColor: "rgb(99,102,241)"}} />
      </section>

      </form>
      </article>
    </main>
  )
}