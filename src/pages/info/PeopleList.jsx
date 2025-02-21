import { Link } from "react-router-dom"
export default function PeopleList(){

  return(
    
    <main>
    <article style={{width: "72%"}}>
      <h1>인재현황</h1>
      {/* <desc>잘못된 정보는 업무에 제약이 있을 수 있으니, 정확한 기업 정보를 입력해 주세요.</desc> */}
      <section style={{backgroundColor: "white"}}>
        <ul className="listBox">
          <Link><li className="list"><div>0010</div><div>OO하는 OO직원 홍길동</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0009</div><div>OO하는 OO직원 홍길동</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0008</div><div>OO하는 OO직원 홍길동</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0007</div><div>OO하는 OO직원 홍길동</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0006</div><div>OO하는 OO직원 홍길동</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0005</div><div>OO하는 OO직원 홍길동</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0004</div><div>OO하는 OO직원 홍길동</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0003</div><div>OO하는 OO직원 홍길동</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0002</div><div>OO하는 OO직원 홍길동</div><div>OO주식회사</div></li></Link>
          <Link><li className="list"><div>0001</div><div>OO하는 OO직원 홍길동</div><div>OO주식회사</div></li></Link>
        </ul>
      </section>
      </article>
    </main>
    
  )
}