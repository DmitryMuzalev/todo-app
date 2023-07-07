import { Form } from '../../components/Form/Form';
import { Header } from '../../components/Header/Header';
import { TasksList } from '../../components/TasksList/TasksList';
import { Curtain } from '../../components/Curtain/Curtain';
import { Container } from '../Container/Container';
import { Main } from '../Main/Main';
import { useMediaQuery } from 'react-responsive';
import { MobileToolbar } from '../MobileToolbar/MobileToolbar';
import { Footer } from '../../components/Footer/Footer';

function App() {
  const isMobileScreen = useMediaQuery({ query: '(min-width: 767px)' });
  return (
    <>
      <Curtain />
      <Container>
        <Header />
        <Main>
          <Form />
          <TasksList />
          {!isMobileScreen && <MobileToolbar />}
        </Main>
        <Footer />
      </Container>
    </>
  );
}

export default App;
