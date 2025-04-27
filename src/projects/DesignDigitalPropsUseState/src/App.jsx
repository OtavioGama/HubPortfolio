import styles from './App.module.css';
import { useState } from 'react';
import Topo from './Componentes/Topo';
import Banner from './Componentes/Banner';
import Experiencias from './Componentes/Experiencias';
import Rodape from './Componentes/Rodape';

function App() {

  const [temaAtual, setTemaAtual] = useState('temaClaro');

  const mudarTemaAtual = () => {
    if (temaAtual === 'temaClaro') {
      setTemaAtual('temaEscuro');
    } else {
      setTemaAtual('temaClaro');
    }
  };

  return (
    <div className={styles['App']}>
      <Topo tema={temaAtual} alterar={mudarTemaAtual} />

      <main>
        <Banner tema={temaAtual} />

        <Experiencias tema={temaAtual} />
      </main>

      <Rodape tema={temaAtual} />
    </div>
  );
}

export default App;