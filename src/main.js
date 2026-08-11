import "./style.css";

import Sidebar from "./components/sidebar.js";
import Hero from "./components/hero.js";
import About from "./components/about.js";
import Why from "./components/why.js";
import Faculty from "./components/faculty.js";
import Roles from "./components/roles.js";
import Benefits from "./components/benefits.js";
import FAQ from "./components/faq.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

document.querySelector("#app").innerHTML = `

${Sidebar()}

<main class="content">

${Hero()}

${About()}

${Why()}

${Faculty()}

${Roles()}

${Benefits()}

${FAQ()}

${Contact()}

${Footer()}

</main>

`;