const $fragment = document.createDocumentFragment();

const img_data = [{

    id: "python",
    caption: "Python",
    img_path: "img/icons/python.png"
},
{
    id: "java",
    caption: "Java",
    img_path: "img/icons/java.png"
},
{
    id: "sql",
    caption: "SQL",
    img_path: "img/icons/sql.png"
},
{
    id: "php",
    caption: "PHP",
    img_path: "img/icons/php.png"
},
{
    id: "html",
    caption: "HTML",
    img_path: "img/icons/html.png"
},
{
    id: "css",
    caption: "CSS",
    img_path: "img/icons/css.png"
},
{
    id: "javascript",
    caption: "JavaScript",
    img_path: "img/icons/js.png"
},
{
    id: "git",
    caption: "Git",
    img_path: "img/icons/git.png"
},
{
    id: "android",
    caption: "Android Studio",
    img_path: "img/icons/android.png"
},
{
    id: "terminal",
    caption: "Bash Scripting Cisco",
    img_path: "img/icons/cisco.png"
}];

const img_data2 = [{

    id: "spring_mvc",
    caption: "Spring MVC",
    img_path: "img/icons/spring.png"
},
{
    id: "Hibernate",
    caption: "Hibernate",
    img_path: "img/icons/hibernate.jpg"
},
{
    id: "jsp",
    caption: "Java/Jsp",
    img_path: "img/icons/jsp.png"
},
{
    id: "servlet",
    caption: "Java/Servlet",
    img_path: "img/icons/servlet.jpg"
},
{
    id: "jstl",
    caption: "Java/Jstl",
    img_path: "img/icons/jstl.jpg"
},
{
    id: "swing",
    caption: "Java/Swing",
    img_path: "img/icons/swing.jpg"
},
{
    id: "jsf",
    caption: "Java/Jsf",
    img_path: "img/icons/jsf.png"
},
{
    id: "boot",
    caption: "Spring boot",
    img_path: "img/icons/boot.png"
},
{
    id: "laravel",
    caption: "Laravel",
    img_path: "img/icons/laravel.png"
},
{
    id: "django",
    caption: "django",
    img_path: "img/icons/django.png"
},
{
    id: "bootstrap",
    caption: "Bootstrap",
    img_path: "img/icons/bot.png"
},
{
    id: "font",
    caption: "Font Awesome",
    img_path: "img/icons/font.png"
},
{
    id: "mate",
    caption: "Materialize",
    img_path: "img/icons/mate.png"
},
{
    id: "vue",
    caption: "Vue js",
    img_path: "img/icons/vue.png"
},
{
    id: "san",
    caption: "Sanctum",
    img_path: "img/icons/san.jpg"
},
{
    id: "livewire",
    caption: "Livewire",
    img_path: "img/icons/livewire.png"
}];

const $tech_div = document.getElementById("tech-icons");

img_data.forEach(path => {

    const $div = document.createElement("div");
    $div.classList.add("tech-div");
    const $img = document.createElement("img");
    $img.src = path["img_path"];
    $img.alt = path["id"];
    const $h3 = document.createElement("h3");
    $h3.innerHTML = path["caption"];

    $div.appendChild($img);
    $div.appendChild($h3);

    $fragment.appendChild($div);
});

$tech_div.appendChild($fragment);


const $tech_div2 = document.getElementById("tech2-icons");

img_data2.forEach(path => {

    const $div = document.createElement("div");
    $div.classList.add("tech-div");
    const $img = document.createElement("img");
    $img.src = path["img_path"];
    $img.alt = path["id"];
    const $h3 = document.createElement("h3");
    $h3.innerHTML = path["caption"];

    $div.appendChild($img);
    $div.appendChild($h3);

    $fragment.appendChild($div);
});

$tech_div2.appendChild($fragment);


const projects_data = [{

    name: "Control of articles <br> and post",
    technologies: "HTML-CSS-JavaScript-PHP-MYSQL-FW:LARAVEL,VUE,SANCTUM,BOOTSTRAP",
    description: "API-REST made with Framework Laravel, Vue, Router, Sanctum security and Bootstrap 5, contains modules for registering and editing blogs and articles.",
    url: "https://github.com/lruanod/control_post_-_articulos.git"
},
{
    name: "Student <br> administration",
    technologies: "HTML-CSS-JavaScript-Java-MYSQL-FW:SPRING BOOT,BOOTSTRAP",
    description: "Web application made in SPRING BOOT, MYSQL Database and Bootstrap Framework, with editing registration modules, academic degree assignment and reporting in PDF and xls.",
    url: "https://github.com/lruanod/control_estudiante.git"
},
{
    name: "Moviemega",
    technologies: "HTML-CSS-JavaScript-PHP-MYSQL-FW:LARAVEL,LIVEWIRE,BOOTSTRAP",
    description: "Multimedia web application, made in Laravel; using Frontend components with Livewire library, contains modules for user registration, multimedia, categories, languages, download links, fully admin.",
    url: "https://github.com/lruanod/moviemega.git"
},
{
    name: "Control of personal <br>  bank accounts",
    technologies: "JAVA-ANDROID-FIREBASE",
    description: "Application made in Android, contains modules for account registration, income, expenses, availability consultation, types of expenses, connection with Gmail account and Firebase database.",
    url: "https://github.com/lruanod/control_cuentas_personales.git"
},
{
    name: "Laurdyweb",
    technologies: "JAVA-MYSQL-FW:HIBERNATE,MATERIALIZE",
    description: "Web application, made in Java WEB, with Hibernate, JSTL, Materialize, JSP framework, contains modules, orders, washing services, employees, payments, clients, statuses, PDF reports, etc.",
    url: "https://github.com/lruanod/laudryweb.git"
},
{
    name: "Guateinventory",
    technologies: "HTML-CSS-JavaScript-PHP-MYSQL-FW:LARAVEL,BOOTSTRAP,JQUERY",
    description: "Web application made with Laravel, for store management, contains registration modules for sales, products, employees, customers, invoices, inventories, PDF and xls reports, complete store management, etc.",
    url: "https://github.com/lruanod/guateinventory.git"
},
{
    name: "Fast food outlet",
    technologies: "HTML-CSS-JavaScript-PHP-MYSQL-FW:LARAVEL,LIVEWIRE,BOOTSTRAP",
    description: "Web application for fast food point of sale, includes registration modules for products, customers, ingredients, inventory, sales, orders, PDF and xls reports, etc.",
    url: "https://github.com/lruanod/punto_de_venta_restaurante_comida_rapida.git"
},
{
    name: "MyPolicy",
    technologies: "HTML-CSS-JavaScript-PHP-MYSQL-FW:LARAVEL,LIVEWIRE,BOOTSTRAP",
    description: "Web application made with laravel and livewire, to carry out merchandise policies.",
    url: "https://github.com/lruanod/poliza.git"
},
{
    name: "School system",
    technologies: "HTML-CSS-JavaScript-PHP-MYSQL-FW:LARAVEL,LIVEWIRE,BOOTSTRAP",
    description: "Web application, made in Laravel and Livewire, contains everything related to the administration of a school, payments, sales, registration of students, teachers, courses, tasks, questionnaires, grades, levels, cycles, gallery, etc.",
    url: "https://github.com/lruanod/sistema_escolar.git"
},
{
    name: "MyBlog",
    technologies: "HTML-CSS-JavaScript-PHP-MYSQL-FW:LARAVEL,LIVEWIRE,BOOTSTRAP",
    description: "Development of a web application, blog style for school",
    url: "https://github.com/lruanod/blog.git"
}];

const $project_list_div = document.getElementById("project-list");

projects_data.forEach(project => {

    const $div = document.createElement("div");
    $div.classList.add("project-info");
    const $h3 = document.createElement("h3");
    $h3.innerHTML = project["name"];
    const $h4 = document.createElement("h4");
    $h4.textContent = project["technologies"];
    const $p = document.createElement("p");
    $p.textContent = project["description"];
    const $a = document.createElement("a");
    $a.classList.add("light-btn");
    $a.href = project["url"];
    $a.target = "_blank";
    $a.textContent = "Repository";

    $div.appendChild($h3);
    $div.appendChild($h4);
    $div.appendChild($p);
    $div.appendChild($a);

    $fragment.appendChild($div);
});

$project_list_div.appendChild($fragment);
