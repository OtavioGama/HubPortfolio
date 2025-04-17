import './styles.css';

function ProjectCard({ title, img, description, link }) {
    return (
        <div className='projectCard'>
            <h3>{title}</h3>
            <img src={img} alt='site' />
            <p>{description}</p>
            <a href={link}>Abrir</a>
        </div>
    );
};

export default ProjectCard;