import Header from './components/Header/Header';
import Content from './components/Content/Content';

import './styles/style.css';

const App = () => {
  return (
    <section className="todoapp">
      <Header />
      <Content />
    </section>
  );
};

export default App;
