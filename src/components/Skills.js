import { vue, react, html, css, js, node } from "../images/icons";

function Skills() {
    return (
        <div className="skill">
            <div className="skill-icon">{vue}</div>
            <div className="skill-icon">{react}</div>
            <div className="skill-icon">{js}</div>
            <div className="skill-icon">{html}</div>
            <div className="skill-icon">{css}</div>
            <div className="skill-icon">{node}</div>
        </div>
    );
}

export default Skills;
