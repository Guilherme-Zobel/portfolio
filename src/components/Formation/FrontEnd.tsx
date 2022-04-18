import { ItemContainer } from './styles';

export default function FrontEnd() {
  return (
    <ItemContainer>
      <div>
        <h1>Front-end</h1>
        <h2>Concluído</h2>
        <p>
          Segundo módulo da Trybe, que aborda conteúdos relacionados a
          desenvolvimento Front-end,{' '}
          <span>
            React, incluindo Componentes, Estado e Eventos, Componentes
            Controlados, Ciclo de Vida, Router, Testes com RTL, Redux com React,
            Context API, React Hooks, metodologias ágeis e habilidades
            comportamentais.
          </span>
        </p>
        <button type="button">
          <a
            href="https://www.credential.net/da5e79af-3ad2-4441-8cd2-10f1e697b8cc"
            target="_blank"
            rel="noreferrer"
          >
            Certificado
          </a>
        </button>
      </div>
    </ItemContainer>
  );
}
