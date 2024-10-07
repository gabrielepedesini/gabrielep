// finds out in which page the user is
window.addEventListener("load", () => {

    const url = window.location.pathname;

    // right now, only itlian language
    let lang = "it";
    document.documentElement.lang = "it";

    // renderize a project page
    if (url.includes("/projects/")) {
        const regex = /projects\/(.*?)\.html/;
        const match = url.match(regex);
        let result = match[1];
        return renderProject(lang, result);
    }

    // renderize the projects page
    if (url.includes("/projects")) {
        return renderProjects(lang);
    }

    // renderize the notes page
    if (url.includes("/notes")) {
        return renderNotes(lang);
    }

    // renderize the contacts page
    if (url.includes("/contacts")) {
        return renderContacts(lang);
    }

    // renderize the index page
    if (url.includes("/index") || url === "/") {
        return renderIndex(lang);
    }
})

// render a project page
function renderProject(lang, url) {

    let copy;

    let projectElement = document.querySelector(".render-project");

    projectElement.innerHTML = "";

    if (lang === "it") {

        // fethces the json
        fetch('../assets/json/database.json')
        .then(response => response.json())
        .then(text => {
            copy = text.it.projects;

            copy.forEach(element => {
                if (url === element.id) {

                    // updates page title
                    document.title = `${element.title} | gabriele pedesini`;

                    // renders title section
                    let titleSection = `
                        <section class="project-title">
                            <div class="container">

                                <div class="breadcrumb">
                                    <a href="../projects.html">progetti</a> 
                                    <span class="opacity">/ ${element.title}</span>
                                </div>

                                <h1>${element.title}</h1>
                    `;

                    if (element.img === true) {
                        titleSection += `
                            <img src="../assets/img/${element.id}/img.png" alt="${element.title}">
                        `;
                    }

                    titleSection += `
                            </div>
                        </section>
                    `;

                    projectElement.innerHTML += titleSection;

                    // renders desc section
                    if (element.desc !== null) {

                        let descriptionSection = `
                            <section class="project-section">
                                <div class="container">

                                    <h3>descrizione</h3>
                        `;

                        element.desc.forEach(el => {
                            descriptionSection += `
                                <p>${el}</p>
                            `
                        });

                        descriptionSection += `
                                </div>
                            </section>
                        `;

                        projectElement.innerHTML += descriptionSection;
                    }

                    // renders goals section
                    if (element.goals !== null) {

                        let goalsSection = `
                            <section class="project-section">
                                <div class="container">

                                    <h3>obiettivi</h3>
                        `;

                        element.goals.forEach(el => {
                            goalsSection += `
                                <p>${el}</p>
                            `
                        });

                        goalsSection += `
                                </div>
                            </section>
                        `;

                        projectElement.innerHTML += goalsSection;
                    }

                    // renders functions section
                    if (element.functions !== null) {

                        let functionsSection = `
                            <section class="project-section">
                                <div class="container">

                                    <h3>funzioni</h3>
                                    <ul>
                        `;

                        element.functions.forEach(el => {
                            functionsSection += `
                                <li>${el}</li>
                            `
                        });

                        functionsSection += `
                                    </ul>
                                </div>
                            </section>
                        `;

                        projectElement.innerHTML += functionsSection;
                    }

                    // renders technologies section
                    if (element.technologies !== null) {

                        let technologiesSection = `
                            <section class="project-section">
                                <div class="container">

                                    <h3>tecnologie</h3>
                                    <ul>
                        `;

                        element.technologies.forEach(el => {
                            technologiesSection += `
                                <li>${el}</li>
                            `
                        });

                        technologiesSection += `
                                    </ul>
                                </div>
                            </section>
                        `;

                        projectElement.innerHTML += technologiesSection;
                    }

                    // renders link section
                    if (element.link !== null || element.github !== null) {

                        let linkSection = `
                            <section class="project-link">
                                <div class="container">

                                    <h3>link</h3>
                        `;

                        if (element.link !== null) {
                            linkSection += `
                                <p>
                                    <span>live preview:</span> <a href="https://${element.link}">${element.link}</a>
                                </p>
                            `
                        }

                        if (element.github !== null) {
                            linkSection += `
                                <p>
                                    <span>github:</span> <a href="${element.github}">repo</a>
                                </p>
                            `
                        }

                        linkSection += `
                                </div>
                            </section>
                        `;

                        projectElement.innerHTML += linkSection;
                    }
                }
            });
            
        })
        .catch(error => console.error('Error loading JSON:', error));

    } else {

    }
}

// render projects page
function renderProjects(lang) {

    let copy;
    let listElement = document.querySelector(".render-projects");

    listElement.innerHTML = "";

    if (lang === "it") {

        // fethces the json
        fetch('assets/json/database.json')
        .then(response => response.json())
        .then(text => {
            copy = text.it.projects;

            copy.forEach(element => {
                listElement.innerHTML += `
                    <li>
                        <a href="projects/${element.id}.html">${element.title}</a> - <span>${element.date}</span>
                        <p class="desc">${element.shortdesc}</p>
                    </li>
                `
            });
        })
        .catch(error => console.error('Error loading JSON:', error));

    } else {

    }
}
