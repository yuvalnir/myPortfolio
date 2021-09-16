import Project from "./Project";

function Projects() {
    const name1 = "The Cook'sGram";
    const name2 = "Chaizu - Landing page";
    const name3 = "Tenants Manager";
    const description1 = "Recipe site, in the future will be a social network";
    const description2 = "Open-source project on its first steps";
    const description3 = "Small app for managing tenant's";
    const link1 = "https://github.com/yuvalnir/TheCooksGram";
    const link2 = "https://github.com/arielferdman/pm";
    const link3 = "https://github.com/yuvalnir/tenant-manager";

    return (
        <div className="projects">
            <h1 className="projects-title" >Projects</h1>
            <div className="projects-container">
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
                <Project
                    name={name3}
                    description={description3}
                    link={link3}
                ></Project>
            </div>
        </div>
    );
}

export default Projects;
