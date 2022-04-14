/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfoContainer, CodeItem } from './styles';

function HomeHero() {
  return (
    <Container>
      <div>
        <TextContainer>
          <h1>Olá!</h1>
          <h2>Me Chamo Guilherme</h2>
        </TextContainer>
        <InfoContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Guilherme, </span>
            </div>
            <div>
              Sobrenome: <span className="blue">Zobel</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Front-end, </span>
            </div>
            <div>
              Cidade: <span className="blue">Gravataí/RS</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfoContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
