import { Link } from "react-router-dom";

export default function JobList(){

  return(
    <>
    <main>
      <article style={{width: "72%"}}>
      <h1>채용공고</h1>
      {/* <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 기업 정보를 입력해 주세요.</desc> */}
      <section style={{backgroundColor: "white"}}>
        <ul className="listBox">
          <Link><li className="list"><div>0010</div><div>OOOO하는 OO업무 OO 구인</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0009</div><div>OOOO하는 OO업무 OO 구인</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0008</div><div>OOOO하는 OO업무 OO 구인</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0007</div><div>OOOO하는 OO업무 OO 구인</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0006</div><div>OOOO하는 OO업무 OO 구인</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0005</div><div>OOOO하는 OO업무 OO 구인</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0004</div><div>OOOO하는 OO업무 OO 구인</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0003</div><div>OOOO하는 OO업무 OO 구인</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0002</div><div>OOOO하는 OO업무 OO 구인</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0001</div><div>OOOO하는 OO업무 OO 구인</div><div>OO주식회사</div></li></Link>
        </ul>
      </section>
      </article>
    </main>
    </>
  )
}