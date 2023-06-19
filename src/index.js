function createInitialWebpage() {

    // Create container that stores ALL of the content
    var container = document.createElement('div');
    container.setAttribute("id", "container");

    var header = document.createElement("header");
    header.textContent = "Header";

    var content = document.createElement("main");
    content.setAttribute("id", "content");

    var navbar = document.createElement("navbar");

    var todoSection = document.createElement("article");
    todoSection.textContent = "To Do";

    var footer = document.createElement("footer");
    footer.textContent = "Footer";


    content.appendChild(navbar);
    content.appendChild(todoSection);
    
    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);

    return container;
}

function populateNavbar() {
    var navbar = document.querySelector("navbar");

    var tasksSection = document.createElement('div');
    tasksSection.setAttribute("id", "tasksSection");

    var tasks = document.createElement('div');
    tasks.setAttribute("id", "tasks");
    tasks.textContent = "Tasks";

    var today = document.createElement('div');
    today.setAttribute("id", "today");
    today.textContent = "Today";

    var month = document.createElement('div');
    month.setAttribute("id", "month");
    month.textContent = "Month";

    tasksSection.appendChild(tasks);
    tasksSection.appendChild(today);
    tasksSection.appendChild(month);

    var projectsSection = document.createElement('div');
    projectsSection.setAttribute("id", "projectsSection");

    var projectsText = document.createElement("h1");
    projectsText.textContent = "Projects";

    var addProjects = document.createElement('div');
    addProjects.textContent = "+ Add Project";
    
    projectsSection.appendChild(projectsText);
    projectsSection.appendChild(addProjects);

    navbar.appendChild(tasksSection);
    navbar.appendChild(projectsSection);
}



const container = createInitialWebpage();
document.body.appendChild(container);


populateNavbar();