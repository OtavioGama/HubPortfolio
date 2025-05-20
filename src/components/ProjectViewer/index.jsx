import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Loads and displays a full HTML file
// Useful for embedding old HTML projects inside a React SPA
function ProjectViewer() {
    const { project } = useParams(); // Get the project name from the URL (e.g. /HTMLprojects/SomeProject)
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
    // Define the path based on dev or production mode
        const path = import.meta.env.DEV
            ? `/src/projects/HTMLprojects/${project}/index.html`
            : `/HTMLprojects/${project}/index.html`;

        fetch(path)
            .then(res => res.text())
            .then(setHtmlContent)
            .catch(console.error);
    }, [project]);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}

export default ProjectViewer;