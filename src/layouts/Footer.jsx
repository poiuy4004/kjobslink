export default function Footer(){
  return(
    <footer style={{position: "relative"}}>
      <button style={{width: 50, height: 50, borderRadius: 50, position: "fixed", right: "3%", top: "90%", color: "white", textAlign: "center", alignContent: "center", backgroundColor: "rgb(200,10,180)"}}>A I<br />챗봇</button>

      <div style={{width: "100%", height: 180, backgroundColor: "rgb(33,37,41)", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontSize: 70}}>
        - Footer Space -
      </div>
    </footer>
  )
}