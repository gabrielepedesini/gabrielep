// preferred language
const langPreferred = navigator.language || navigator.userLanguage;
let lang;

if (langPreferred.startsWith('it')) {
    lang = "it"
} else {
    lang = "en"
}

// modify the links
let navbarLinks;

if (lang === "it") {
    navbarLinks = [
        { href: "index.html", text: "home" },
        { href: "notes.html", text: "appunti" },
        { href: "projects.html", text: "progetti" },
        { href: "contacts.html", text: "contatti" }
    ];
} else if (lang === "en") {
    navbarLinks = [
        { href: "index.html", text: "home" },
        { href: "notes.html", text: "notes" },
        { href: "projects.html", text: "projects" },
        { href: "contacts.html", text: "contacts" }
    ];
}

// render the navbar
function renderNavbar() {
    const navbarContainer = document.querySelector('.navbar');

    let navbarHTML = `
        <div class="container">
            <ul>
    `;

    if (window.location.pathname.includes("/projects/")) {
        navbarLinks.forEach(link => {
            navbarHTML += `
                <li>
                    <a href="../${link.href}">${link.text}</a>
                </li>
            `;
        });
    } else {
        navbarLinks.forEach(link => {
            navbarHTML += `
                <li>
                    <a href="${link.href}">${link.text}</a>
                </li>
            `;
        });
    }

    navbarHTML += `
            </ul>
        </div>
    `;

    navbarContainer.innerHTML = navbarHTML;
}

window.addEventListener("load", () => {
    renderNavbar();
})