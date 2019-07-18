import {Container} from "./styled"
export default ({ counter, onClick }) => (
  <Container onClick={onClick}>Clicked {counter} times</Container>
)