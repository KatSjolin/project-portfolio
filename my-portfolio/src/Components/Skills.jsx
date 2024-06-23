import './Skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>

            <div className="skills-container">
                <div className="skills-section">
                    <h3>Code</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript ES6</li>
                        <li>React</li>
                        <li>Styled Components</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>GitHub</li>
                    </ul>
                </div>

                <div className="skills-section">
                    <h3>Toolbox</h3>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>Postman</li>
                        <li>Figma</li>
                        <li>Slack</li>
                    </ul>
                </div>

                <div className="skills-section">
                    <h3>More</h3>
                    <ul>
                        <li>Strategy</li>
                        <li>Concept development</li>
                        <li>Agile methodology</li>
                        <li>Debugging</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;

