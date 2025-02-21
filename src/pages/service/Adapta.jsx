import { useEffect, useState } from "react";

import koreanPdf from "../../assets/pdf/korean.pdf";

export default function Adapta(){
  return(
    <main>
    <article style={{width: "72%", display: "flex", flexDirection: "column", rowGap: "3vh"}}>
      <h1>적응프로그램</h1>
      <desc><a target="_blank" href="https://www.socinet.go.kr/soci/contents/PgmHappStar.jsp?q_global_menu_id=S_HS_SUB01">https://www.socinet.go.kr/soci/contents/PgmHappStar.jsp?q_global_menu_id=S_HS_SUB01</a></desc>
      <section style={{width: "100%", padding: 18, borderRadius: 10, backgroundColor: "white"}}>
        <h4>&lt;각 기관 홈페이지 주소&gt;</h4>
        <ul>
            <li></li>
            <li class="first"><img src="/ext/soci/images/board/b_icon01.gif" alt="" /><span class="s_title01">참여대상</span></li>
            <li><span>○ 기본적 참여요건</span></li>
            <li class="p_06">- 국내에 장기체류할 목적으로 합법적으로 체류하고 있는 외국인<br/><br/></li>
            <li><span>○ 유형별 참여대상</span></li>
            <li>
               	<table class="G_timeTable">
               		<caption>유형별 참여대상 표</caption>
              		<colgroup>
              			<col style={{width: "20%"}}/>
              			<col style={{width: "20%"}}/>
              		</colgroup>
               		<thead>
                  		<tr>
                   			<th colspan="2" class="black"></th>
                  		</tr>
                   		<tr>
                   			<th scope="col" colspan="2">체류유형</th>
                   			<th scope="col" class="right1">자격</th>
                   		</tr>
               		</thead>
               		<tbody>
                  		<tr>
                   			<th scope="row" colspan="2">외국인 유학생</th>
                   			<td class="last">국내 대학에 입학한 외국인유학생(D-2) 및 어학연수생(D-4-1)</td>
                  		</tr>
                   		<tr>
                   			<th scope="row" colspan="2">밀집지역 외국인</th>
                   			<td class="last">외국인 밀집지역에 거주하는 외국인(체류자격 불문)</td>
                  		</tr>
                  		<tr>
                   			<th scope="row" colspan="2">결혼이민자</th>
                   			<td class="last">결혼사증(F-6)을 소지하거나 결혼(F-6) 체류자격으로 변경하고자 하는 국민의 외국인 배우자
                   			</td>
                  		</tr>
		                <tr>
                   			<th scope="row" colspan="2">중도입국 청소년</th>
                   			<td class="last">전체 합법체류자의 만 9세 이상~24세 미만의 중도입국 청소년
							</td>
                   		</tr>
                   		 <tr>
                   			<th scope="row" colspan="2">외국국적동포</th>
                   			<td class="last">방문취업(H-2)자격으로 외국인등록 또는 체류자격을 변경하려는 외국국적동포</td>
                   		</tr>
                   		<tr>
                   			<th scope="row" colspan="2">외국인 연예인</th>
                   			<td class="last">호텔업 시설·유흥업소 등에서 공연을 하는 예술·흥행(E-6-2) 체류자격의<br/>외국인 연예인</td>
                  		</tr>
                   		<tr>
                   			<th scope="row" colspan="2">계절근로자</th>
                   			<td class="last">단기취업(C-4) 또는 계절근로(E-8) 자격으로 입국하는 계절근로자</td>
                   		</tr>
                   		<tr>
                   			<th scope="row" colspan="2">외국인 근로자</th>
                   			<td class="last">특정활동(E-7) 및 비전문취업(E-9) 근로자</td>
                   		</tr>
                   		<tr>
                   			<th scope="row" colspan="2">재정착난민</th>
                   			<td class="last">출입국·외국인지원센터에 입소한 재정착난민</td>
                   		</tr>
                   	</tbody>
                </table><br/>
			</li>
            <li class="p_06">※ 교육참여 관련 유의사항</li>
            <li class="p_07">- 방문취업(H-2) 외국국적동포, 호텔·유흥(E-6-2) 외국인연예인은 조기적응프로그램을 이수하지 않으면 외국인 등록 불가</li>
		</ul>
      </section>
    </article>
    </main>
  )
}