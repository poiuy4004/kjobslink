import Header from "../../layouts/Header";
import Header2 from "../../layouts/Header2";

export default function PeopleList(){

  return(
    <>
    <Header sort="info" />
    <Header2 sort="info" page="peoplelist" />
    <main>
      PeopleList
    </main>
    </>
  )
}