import './App.css';
import githubIcon from './assets/github-icon.svg';
import linkedinIcon from './assets/linkedin-icon.svg';

function App() {
  return (
    <div className='App'>
        <div className='Banner'>
            <div>
                <a href='https://github.com/OtavioGama' target="_blank">
                    <img src={githubIcon} alt='GitHub'/>
                </a>

                <a href='https://www.linkedin.com/in/otavio-alexandre-gama/' target="_blank">
                    <img src={linkedinIcon} alt='Linkedin'/>
                </a>
            </div>

            <h1>Otávio Gama</h1>
            <h2>Desenvolvedor Web</h2>

            <p>Aqui se encontra minha trajetória de aprendizagem de codificação.</p>
        </div>
    </div>
  )
}

export default App
