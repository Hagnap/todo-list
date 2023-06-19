function createInitialWebpage() {

    // Create container that stores ALL of the content
    var container = document.createElement('div');
    container.setAttribute("id", "container");

    var header = document.createElement("header");
    header.textContent = "Header";

    var content = document.createElement("main");
    content.setAttribute("id", "content");

    var footer = document.createElement("footer");
    footer.textContent = "Footer";


    var navbar = document.createElement("navbar");
    navbar.textContent = "Navbar";

    var todoSection = document.createElement("article");
    todoSection.textContent = "Article";


    content.appendChild(navbar);
    content.appendChild(todoSection);
    
    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);

    return container;
}



const container = createInitialWebpage();
document.body.appendChild(container);