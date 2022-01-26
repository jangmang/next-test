import { Icon } from "semantic-ui-react";

export default function Error404(){
  return (
    <div style={{ padding:"200px 0", textAlign:"center", fontSize: 20 }}>
      <Icon name="warning circle" color="#000" />
      404 : 페이지를 찾을 수 없습니다!
    </div>
  )
}