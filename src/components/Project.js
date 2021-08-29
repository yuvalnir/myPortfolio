function Project(props) {
    return (
        <div className="project">
            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="project-name">
                    <p>{props.name}</p>
                </div>
                <div className="project-description">
                    <p>{props.description}</p>
                </div>
            </a>
        </div>
    );
}

export default Project;
