import './styles.css';
import { useEffect, useRef, useState } from 'react';

function ProjectCard({ title, image, description, link }) {

    // Check if the image height is greater than 230px
    const imgRef = useRef(null);
    const [shouldScroll, setShouldScroll] = useState(false);
    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;
    
        const checkHeight = () => {
            if (img.naturalHeight > 230) {
                setShouldScroll(true);
            }
        };

        if (img.complete) {
            checkHeight();
        } else {
            // If the image is still loading
            img.addEventListener('load', checkHeight);
            return () => img.removeEventListener('load', checkHeight);
        }
    }, []);

    return (
        <div className='projectCard'>
            <h3>{title}</h3>
            <div className='imageWrapper'>
                <img
                    ref={imgRef}
                    src={image}
                    alt='site'
                    className={shouldScroll ? 'scrollImage' : ''}
                />
            </div>
            <p>{description}</p>
            <a href={link}>Abrir</a>
        </div>
    );
};

export default ProjectCard;