import * as content from "./contentTabs"

const Project = (projectName) => {
    let tasks = [];

    /*
    const addTask = (task) => {
        tasks.push(task);
    }
    */

    return { projectName, tasks /*,  addTask */ };
}

const projectCollection = (() => {
    let projects = []
    let storedProjects = JSON.parse(window.localStorage.getItem("allProjects"));
    
    if(storedProjects) {
        console.log("Projects are present");
        for(let index in storedProjects.projects) {
            projects.push(storedProjects.projects[index]);
        }
    }
    else {
        console.log("No projects are present");
    }

    return { projects };
})();

function addProject(project) {
    projectCollection.projects.push(project);
    console.table(projectCollection.projects);
    window.localStorage.setItem("allProjects", JSON.stringify(projectCollection));

    displayProject(project);

    //location.reload();
    content.displayAllTasks();

    /*
    if(Project.projectCollection.projects) {
        Project.projectCollection.projects.forEach((project) => {
            Project.displayProject(project);
        });
    }
    */
}

function displayProject(project) {
    var allProjectsDiv = document.querySelector("#projects-div");

    var projectDiv = document.createElement("div");
    projectDiv.textContent = project.projectName;

    allProjectsDiv.appendChild(projectDiv);
}

export {Project, projectCollection, addProject, displayProject};