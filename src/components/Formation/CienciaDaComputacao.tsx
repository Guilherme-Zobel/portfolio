import { ItemContainer } from './styles';

export default function CienciaDaComputacao() {
  return (
    <ItemContainer>
      <div>
        <h1>Ciência da Computação</h1>
        <h2>Não iniciado</h2>
        <p>
          Quarto módulo da Trybe, que aborda conteúdos relacionados a Ciência da
          Computação, incluindo{' '}
          <span>
            Python e OOP, Algoritmos e Complexidade, Estrutura de Dados e
            Resolução de Problemas, metodologias ágeis e habilidades
            comportamentais.
          </span>
        </p>
        <button type="button" disabled>
          Certificado
        </button>
      </div>
    </ItemContainer>
  );
}
