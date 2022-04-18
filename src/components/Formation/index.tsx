import SectionTitle from '../SectionTitle';
import BackEnd from './BackEnd';
import CienciaDaComputacao from './CienciaDaComputacao';
import FrontEnd from './FrontEnd';
import Fundamentos from './Fundamentos';
import { Container } from './styles';

function Formation() {
  return (
    <Container>
      <SectionTitle title="#Trybe" description="formação" />

      <section>
        <Fundamentos />
        <FrontEnd />
        <BackEnd />
        <CienciaDaComputacao />
      </section>
    </Container>
  );
}

export default Formation;
