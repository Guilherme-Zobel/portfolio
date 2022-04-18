import { ItemContainer } from './styles';

export default function BackEnd() {
  return (
    <ItemContainer>
      <div>
        <h1>Back-end</h1>
        <h2>Em andamento</h2>
        <p>
          Terceiro módulo da formação em Desenvolvimento Web na Trybe, que
          aborda conteúdos relacionados a desenvolvimento Back-end, incluindo{' '}
          <span>
            Banco de Dados SQL, NoSQL, Node e Express.js, MVC, API, REST, JWT e
            File Upload, SOLID, ORM, Sockets, deploy com Heroku, metodologias
            ágeis e habilidades comportamentais.
          </span>
        </p>
        <button type="button" disabled>
          Certificado
        </button>
      </div>
    </ItemContainer>
  );
}
