import Title from 'components/Title/Title';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import './styles/app.sass';

const App = () => {
  return (
    <>
      <Title title={'todos'} />
      <section className="todoapp">
        <Header />
        <Content />
      </section>
    </>
  );
};

export default App;
