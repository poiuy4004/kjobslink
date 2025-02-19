import Header from "../../layouts/Header";
import Header2 from "../../layouts/Header2";

export default function Ideology(){
  return(
    <>
    <Header sort="intro" />
	<Header2 sort="intro" page="ideology" />
    <main>
      <article style={{width: "72%",}}>
		<ul>
			<li>
				<div><img src="https://www.kjobs.co.kr/resources/front/img/img_ideology01.jpg" alt="사람 중심의 기업" /></div>
				<div>
					<div>
						<span>01</span>
						<strong>사람 중심의 기업</strong>
						<p>
							미래를 향한 성장의 지름길은 오직 사람을 통해서만 가능합니다.<br />
							케이잡스는 회사 구성원을 최고의 가치로 여기고 존중하며, <br />
							인재양성을 경영 활동의 가장 중요한 요소로 두고 있습니다.
						</p>
					</div>
				</div>
			</li>
			<li>
				<div><img src="https://www.kjobs.co.kr/resources/front/img/img_ideology02.jpg" alt="정직과 신뢰의 기업" /></div>
				<div>
					<div>
						<span>02</span>
						<strong>정직과 신뢰의 기업</strong>
						<p>
							진실됨을 기초로 정도 경영을 통한 정직한 기업입니다. <br />
							기본을 지키며 진심으로 올바른 일을 합니다. <br />
							고객과의 약속, 직원과의 약속을 지키며 정직함과 성실함으로 신뢰감을 드리겠습니다.
						</p>
					</div>
				</div>
			</li>
			<li>
				<div><img src="https://www.kjobs.co.kr/resources/front/img/img_ideology03.jpg" alt="꿈을 만드는(이루는)기업" /></div>
				<div>
					<div>
						<span>03</span>
						<strong>꿈을 만드는(이루는)기업</strong>
						<p>
							두려움 없이 도전하여 새로운 세상과 길을 열어갑니다.  <br />
							최고가 되기 위한 최상의 서비스와 끊임없는 도전정신으로  <br />
							케이잡스가 꿈을 만들어 드리겠습니다.
						</p>
					</div>
				</div>
			</li>
			<li>
				<div><img src="https://www.kjobs.co.kr/resources/front/img/img_ideology04.jpg" alt="성공회대학교" /></div>
				<div>
					<div>
						<span>04</span>
						<strong>사회적 책임을 실천하는 기업</strong>
						<p>
							회사 구성원들과의 이익을 공유하며, 고용노동부 고용서비스 <br />
							민간위탁기관이라는 자부심을 갖고 사회발전에 기여하는 <br />
							기업이 되겠습니다.
						</p>
					</div>
				</div>
			</li>
		</ul>
      </article>
    </main>
    </>
  )
}