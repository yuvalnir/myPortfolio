import Project from "./Project";

function Projects() {
    const name1 = "The Cook'sGram";
    const name2 = "Tenants Manager";
    const description1 = "Recipe site, in the future will be a social network";
    const description2 = "App to manage tenant's";
    const link1 = "";
    const link2 = "";

    return (
        <div className="projects">
            <h1 className="projects-title" >Projects</h1>
            <Project
                name={name1}
                description={description1}
                link={link1}
            ></Project>
            <Project
                name={name2}
                description={description2}
                link={link2}
            ></Project>
        </div>
    );
}

export default Projects;
