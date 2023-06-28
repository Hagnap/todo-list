import * as Content from "./contentTabs";
import * as Index from "./index";

const Project = (projectName) => {
    let tasks = [];

    return { projectName, tasks};
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
    Content.displayAllTasks();
}

function displayProject(project) {
    var allProjectsDiv = document.querySelector("#projects-div");

    var projectDiv = document.createElement("div");
    projectDiv.setAttribute("class", "project-div");
    projectDiv.textContent = project.projectName;
    projectDiv.addEventListener("click", (e) => {
        Content.displayCurrentProject(project);
    });

    allProjectsDiv.appendChild(projectDiv);
}

function deleteProject(project, index) {

    console.log(index);
    project;
    for(let i = 0; i < projectCollection.projects.length; i++) {

        
        if(project.projectName == projectCollection.projects[i].projectName) {
            projectCollection.projects = (projectCollection.projects.slice(0, i).concat(projectCollection.projects.slice(i+1, projectCollection.projects.length)));
            window.localStorage.setItem("allProjects", JSON.stringify(projectCollection));
            Content.displayAllTasks();
                    
            Index.resetNavBarProjects();
            Index.fillNavBarProjects();
            break;
        }
    }
}

export {Project, projectCollection, addProject, deleteProject, displayProject};