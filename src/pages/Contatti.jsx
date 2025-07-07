import './Contatti.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contatti() {
    return (
        <section className="contatti">
            <h2>Contattami</h2>

            <div className="info-contatti">
                <p>
                    <FaEnvelope />{" "}
                    <a href="mailto:albertonencha01@gmail.com">albertonencha01@gmail.com</a>
                </p>
                <p>
                    <FaLinkedin />{" "}
                    <a
                        href="https://www.linkedin.com/in/alberto-nencha-72768133b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </p>
                <p>
                    <FaGithub />{" "}
                    <a
                        href="https://github.com/Alberto-Nencha"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </p>
            </div>

            <form action="https://formspree.io/f/xjkrqvdj" method="POST">
                <input type="text" name="nome" placeholder="Il tuo nome" required />
                <input type="email" name="email" placeholder="La tua email" required />
                <textarea name="messaggio" placeholder="Scrivimi un messaggio" required />
                <button type="submit">Invia</button>
            </form>
        </section>
    );
}

export default Contatti;