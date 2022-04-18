import { ItemContainer } from './styles';

export default function Fundamentos() {
  return (
    <ItemContainer>
      <div>
        <h1>Fundamentos</h1>
        <h2>Concluído</h2>
        <p>
          Primeiro módulo da Trybe, que aborda conteúdos relacionados a
          Fundamentos do Desenvolvimento Web, aplicando de forma prática
          conteúdos como:{' '}
          <span>
            Unix & Bash, Git, JS Básico & DOM, HTML, CSS, JS ES6, Higher Order
            Functions e Testes Unitários{' '}
          </span>
          , assim como{' '}
          <span>metodologias ágeis e habilidades comportamentais.</span>
        </p>
        <button type="button">
          <a
            href="https://www.credential.net/52e37ff7-8c54-4ba9-85e0-715e61c1cd46#gs.xpqwr7"
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
