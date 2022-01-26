import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return ( 
    <>
      <div style={{display:"flex"}}>
        <div style={{flex: "100px 0 0"}}>
          <img src="/images/pic.jpg" alt=""  style={{display:"block", width: 80}} />
        </div>
        <Header as="h1">장맹</Header>      
      </div>
      <Gnb />
    </>
  )
}