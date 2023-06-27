const Project = (name) => {
    let tasks = [];
    let projectName = name;

    const addTask = (task) => {
        tasks.push(task);
    }

    return { projectName, tasks, addTask };
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

export {Project, projectCollection};