import { useState } from "react";

export default function Home() {
  const [renderWaiting, setRenderWaiting] = useState("hideWaiting")
  return (
    <>
    <main style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1 style={{padding: 14}}>KJOBSLINK supports your success.</h1>

      <div style={{height: 555, width: "100%", pointerEvents: "none"}}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bHwz2DZMVr0?autoplay=1&mute=1&controls=0&loop=1&playlist=bHwz2DZMVr0"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
      </div>

      <div style={{display: "flex"}}>
        <img src="https://kjobslink.co.kr/theme/bootstrap5-basic/img/01.png" alt="첫번째 홈이미지" style={{width: "33%"}} />
        <div style={{width: "100%", alignContent: "center", textAlign: "center"}}>
          <div>Login OAuth Space</div>
        </div>
        <img src="https://kjobslink.co.kr/theme/bootstrap5-basic/img/02.png" alt="두번째 홈이미지" style={{width: "33%"}} />
      </div>

      <h2 style={{width: "100%", padding: 14, textAlign: "center", borderTopStyle: "solid", borderTopWidth: 1, borderTopColor: "#dadee2"}}>With KJOBSLINK</h2>
      <div>Support your success.</div>

      <div style={{display: "flex", margin: 37}}>
        <div style={{textAlign: "center", width: 333}}>
          <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="32.609" cy="32.206" r="31.25" stroke="#000" stroke-width="1.5"></circle><path d="M23.234 42.475h-1.333c-.134 0-.134 0-.134-.133V30.875c0-.133 0-.133.134-.133h4.266v-1.467h-4.266c-.934 0-1.6.667-1.6 1.6v11.467c0 .933.666 1.6 1.6 1.6h1.333v-1.467ZM37.905 42.34c0 .133 0 .133-.133.133h-11.6v1.467c0 .8-.667 1.467-1.467 1.467h-1.467v1.467h1.467c1.6 0 2.933-1.2 2.933-2.8v-.134h10.267c.933 0 1.6-.666 1.6-1.6v-7.2h-1.467v7.2h-.133ZM45.1 17.54H29.232c-.934 0-1.6.667-1.6 1.6v11.467c0 .934.666 1.6 1.6 1.6h10.133c0 1.6 1.2 2.934 2.8 2.934h1.467v-1.467h-1.467a1.48 1.48 0 0 1-1.466-1.467v-1.466H29.233c-.134 0-.134 0-.134-.134V19.141c0-.134 0-.134.134-.134h15.866c.134 0 .134 0 .134.133v11.467c0 .134 0 .134-.133.134h-1.334v1.466H45.1c.933 0 1.6-.666 1.6-1.6V19.141c0-.934-.667-1.6-1.6-1.6Z" fill="#000"></path></svg>
          <div>Join your work community</div>
        </div>
        <div style={{textAlign: "center", width: 333}}>
          <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="32.609" cy="32.206" r="31.25" stroke="#000" stroke-width="1.5"></circle><path d="M41.086 19.963h-4.613v-1.585c0-1.73-1.441-3.171-3.171-3.171-1.73 0-3.171 1.441-3.171 3.17v3.172h10.955c.144 0 .144.144.144.144v23.64c0 .144-.144.144-.144.144H25.23c-.144 0-.144-.144-.144-.144v-23.64c0-.144.144-.144.144-.144h3.17v-1.442h-3.17c-1.01 0-1.73.721-1.73 1.73v23.64c0 1.009.72 1.73 1.73 1.73H40.94c1.01 0 1.73-.721 1.73-1.73V21.693c0-.865-.72-1.73-1.585-1.73Zm-9.514-1.585a1.6 1.6 0 0 1 1.586-1.586 1.6 1.6 0 0 1 1.585 1.586v1.585h-3.315v-1.585h.144Z" fill="#000"></path><path d="M26.816 37.55h12.685V23.278H26.816v14.27Zm11.1-12.83v11.244h-9.514V24.72h9.514ZM34.888 39.277h-8.216v1.585h8.216v-1.585ZM39.645 42.45H26.672v1.586h12.973v-1.585Z" fill="#000"></path></svg>
          <div>Find and apply to jobs</div>
        </div>
        <div style={{textAlign: "center", width: 333}}>
          <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="32.609" cy="32.206" r="31.25" stroke="#000" stroke-width="1.5"></circle><path d="M34.163 43.939v-4.4h-5.866v4.4h1.466v-2.934h2.934v2.934h1.466ZM40.835 27.806c.4 0 .8.267.8.8v15.467H43.1v-15.6c0-1.2-.933-2.134-2.133-2.134h-.8v1.467h.667Z" fill="#000"></path><path d="M25.365 19.672c0-.4.267-.8.8-.8h10.267c.4 0 .8.267.8.8v24.133h1.466V19.672c0-1.2-.933-2.133-2.133-2.133h-10.4c-1.2 0-2.267.933-2.267 2.133v24.267h1.467V19.672Z" fill="#000"></path><path d="M35.633 21.937h-2.934v1.467h2.934v-1.467ZM29.77 21.937h-2.934v1.467h2.933v-1.467ZM29.77 26.34h-2.934v1.466h2.933v-1.467ZM29.77 30.738h-2.934v1.467h2.933v-1.467ZM29.77 35.138h-2.934v1.467h2.933v-1.467ZM35.633 26.34h-2.934v1.466h2.934v-1.467ZM35.633 30.738h-2.934v1.467h2.934v-1.467ZM35.633 35.138h-2.934v1.467h2.934v-1.467ZM45.232 45.406H21.766v1.466h23.466v-1.466Z" fill="#000"></path></svg>
          <div>Search company reviews</div>
        </div>
        <div style={{textAlign: "center", width: 333}}>
          <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="32.609" cy="32.206" r="31.25" stroke="#000" stroke-width="1.5"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="m45.5 26.954-.132.019a2.333 2.333 0 0 1-2.617-2.767h2.083c.366 0 .666.299.666.667v2.08Zm0 6.505H45.5a4.081 4.081 0 0 0-4.081 4.08H25.58a4.08 4.08 0 0 0-4.08-4.08v-5.172a4.081 4.081 0 0 0 4.08-4.081h15.838a4.081 4.081 0 0 0 4.081 4.081h.001v5.172Zm0 3.414c0 .369-.3.666-.666.666H42.75a2.752 2.752 0 0 1 2.748-2.746h.001v2.08Zm-23.333.666a.666.666 0 0 1-.667-.666v-2.08a2.751 2.751 0 0 1 2.747 2.746h-2.08ZM21.5 24.873c0-.368.299-.667.667-.667h2.08a2.75 2.75 0 0 1-2.747 2.748v-2.081Zm23.932-2H21.567c-.772 0-1.4.628-1.4 1.4V37.474a1.4 1.4 0 0 0 1.4 1.399H45.432c.772 0 1.402-.627 1.402-1.4v-13.2c0-.772-.63-1.4-1.402-1.4Zm-11.963 10.7a2.67 2.67 0 0 1-2.667-2.667 2.67 2.67 0 0 1 2.667-2.667 2.67 2.67 0 0 1 2.667 2.667 2.67 2.67 0 0 1-2.667 2.666Zm0-6.667a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM33.5 41.54h-9.333a1.333 1.333 0 0 1-1.333-1.333h21.333c0 .736-.597 1.333-1.333 1.333H33.5Z" fill="#000"></path></svg>
          <div>Compare salaries</div>
        </div>
      </div>

      <div className={renderWaiting} style={{width: "100%", paddingBottom: 37, textAlign: "center", backgroundColor: "#f2f4f5"}}>
        <h2 style={{padding: 14}}>Start your search</h2>
        <div style={{marginBottom: 30}}>Search on KJOBSLINK now</div>
        {renderWaiting=="hideWaiting"? <button style={{padding: 10}} onClick={()=>setRenderWaiting("renderWaiting")}>👇</button> : null}
        <div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{width: "33%"}}>Flexible Jobs</div>
            <div style={{width: "33%"}}>Popular Jobs</div>
          </div>
          <div>
            <h2 style={{padding: 14}}>Your Community is Waiting</h2>
            <button style={{padding: 14, backgroundColor: "#a47864", borderStyle: "solid", borderColor: "black", borderRadius: 14}}>Sign Up for Free</button>
          </div>
          <button style={{padding: 10}} onClick={()=>setRenderWaiting("hideWaiting")}>👆</button>
        </div>
      </div>

      <div style={{display: "flex", marginTop: 20, columnGap: 30}}>
        <button style={{padding: 10, color: "white", fontSize: 24, backgroundColor: "#A47864"}}>살펴보기</button>
        <button style={{padding: 10, color: "white", fontSize: 24, backgroundColor: "#A47864"}}>비자안내</button>
        <button style={{padding: 10, color: "white", fontSize: 24, backgroundColor: "#A47864"}}>대학안내</button>
        <button style={{padding: 10, color: "white", fontSize: 24, backgroundColor: "#A47864"}}>입국절차</button>
        <button style={{padding: 10, color: "white", fontSize: 24, backgroundColor: "#A47864"}}>여행정보</button>
      </div>

      <div style={{paddingTop: 50, borderTopStyle: "solid", borderTopWidth: 1, borderTopColor: "#dadee2"}}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div style={{marginBottom: 100}}></div>
    </main>
    </>
  );
}