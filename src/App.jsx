import './App.css';
import ProjectCard from './components/ProjectCard';

import primeiraPagina from './projects/PrimeiraPagina/index.html';
import primeiraPaginaImg from './assets/primeiraPagina.png';
import DesignDigital from './projects/DesignDigitalPropsUseState/index.html';
import DesignDigitalImg from './assets/DesignDigital.png';

function App() {
  return (
    <div className='app'>
        <section className='banner'>
            <div className='banner-content medium-width'>
                <div className='banner-text'>
                    <h1 className='fadeIn from-down delay-1'>Otávio Gama</h1>
                    <h2 className='fadeIn from-down delay-2'>Desenvolvedor Web</h2>

                    <h3 className='fadeIn from-down delay-3'>Aqui se encontra minha trajetória de aprendizagem de codificação.</h3>
                </div>

                <div className='banner-links fadeIn from-down delay-1'>
                    <a href='https://github.com/OtavioGama' target='_blank'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                            <path d='M166 397c0 2-2 4-5 4-4 0-6-1-6-4 0-2 2-3 5-3 3-1 6 1 6 3zm-31-4c-1 2 1 4 4 5s6 0 6-2-1-5-4-5c-3-1-5 0-6 2zm44-2c-3 1-5 3-5 5 1 2 3 3 6 3 3-1 5-3 5-5s-3-3-6-3zM245 8A240 240 0 0 0 0 252c0 111 70 206 170 239 12 2 17-5 17-12v-61s-70 15-85-30c0 0-12-29-28-37 0 0-23-15 2-15 0 0 24 2 38 26 22 38 59 27 73 21 2-16 9-28 16-34-56-6-112-14-112-111 0-27 7-41 23-59-2-6-11-33 3-67 21-7 69 27 69 27a237 237 0 0 1 126 0s48-34 69-27c13 34 5 61 2 67 16 18 26 32 26 59 0 97-59 105-115 111 9 8 17 23 17 46v84c0 6 5 14 17 12a248 248 0 0 0 168-239C496 113 384 8 245 8zM97 353c-1 1-1 3 1 5 1 2 4 2 5 1s1-3-1-5c-1-2-4-2-5-1zm-11-8 3 4c1 1 3 0 4-1s0-3-2-4-4 0-5 1zm33 35c-2 2-1 5 1 7s5 2 7 1c1-2 0-5-2-7s-5-2-6-1zm-12-14v6c2 2 5 3 6 2 2-1 2-4 0-6-1-3-4-4-6-2z'/>
                        </svg>
                    </a>

                    <a href='https://www.linkedin.com/in/otavio-alexandre-gama/' target='_blank'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                            <path d='M416 32H32C14 32 0 47 0 64v384c0 18 14 32 32 32h384c18 0 32-14 32-32V64c0-17-14-32-32-32zM135 416H69V202h67v214zm-33-243a39 39 0 1 1 0-77 39 39 0 0 1 0 77zm282 243h-66V312c0-25-1-57-35-57s-40 27-40 55v106h-66V202h64v29h1c9-16 30-34 63-34 67 0 79 44 79 102v117z'/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <section className='time-line'>
            <div className='time-line-content medium-width'>

                <h2 className='fadeIn from-down delay-4'> Projetos </h2>

                <div className='projects'>
                    <ProjectCard
                        title='Primeiro'
                        image={primeiraPaginaImg}
                        description='blab lablabvlalbasblab lablablalba blablablabl blabla ablabla lablalbla blab lablabvlalbasblab lablablalba blablablabl blabla ablabla lablalbla' 
                        link={primeiraPagina}
                    />

                    <ProjectCard
                        title='Segundo'
                        image={DesignDigitalImg}
                        description='blab lablabvlalbasblab lablablalba blablablabl blabla ablabla lablalbla blab lablabvlalbasblab lablablalba blablablabl blabla ablabla lablalbla' 
                        link={DesignDigital}
                    />
                </div>

            </div>
        </section>
    </div>
  )
}

export default App
