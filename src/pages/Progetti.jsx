import ProjectCard from '../components/ProjectCard';
import '../styles/Progetti.css';

function Progetti() {
    const projects = [
        {
            title: 'Cyberpunk Gaming',
            description: 'Sito di gaming',
            image: '../cyberpunk_gaming.png',
            link: 'https://alberto-nencha-reahcktor-wrme.vercel.app/'
        },
        {
            title: 'Grand Bazar',
            description: 'Progetto svolto in gruppo in php e laravel',
            image: '../gran_bazar.png',
            link: 'https://github.com/Hackademy-156/progetto-presto_agjl-',
        },
        {
            title: 'Ai To Do List',
            description: 'Progetto creato tramite intelligenza artificiale',
            image: '../ai_todolist.png',
            link: 'https://ai-todolist-react.vercel.app/'
        },
        {
            title: 'Portfolio Personale',
            description: 'Il mio sito vetrina con React e Vite.',
            image: '../sito_vetrina.png',
            link: 'https://sito-vetrina-an-pjc.vercel.app/'
        },

    ];

    return (
        <section style={{ padding: '2rem', display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {projects.map((proj, index) => (
                <ProjectCard
                    key={index}
                    title={proj.title}
                    description={proj.description}
                    image={proj.image}
                    link={proj.link}
                />
            ))}
        </section>
    );
}

export default Progetti;