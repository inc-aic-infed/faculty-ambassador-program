export default function Benefits() {

    const benefits = [

        {
            icon:"🏅",
            title:"Professional Recognition",
            text:"Receive official recognition as an AIC-INFED Faculty Ambassador and showcase your contribution towards fostering innovation and entrepreneurship."
        },

        {
            icon:"🤝",
            title:"Ecosystem Access",
            text:"Connect with startup founders, mentors, investors, industry experts and innovation leaders from across the country."
        },

        {
            icon:"📚",
            title:"Faculty Development",
            text:"Gain access to exclusive workshops, learning sessions, innovation programs and entrepreneurship development opportunities."
        },

        {
            icon:"🏛️",
            title:"Institutional Leadership",
            text:"Position your institution as a hub for innovation and entrepreneurship while inspiring students to build impactful ventures."
        },

        {
            icon:"🌐",
            title:"Network Expansion",
            text:"Become part of a vibrant network of faculty champions collaborating to strengthen India's innovation ecosystem."
        },

        {
            icon:"🚀",
            title:"Catalyst for Change",
            text:"Play a meaningful role in nurturing future entrepreneurs and creating a lasting innovation culture within your campus."
        }

    ];

    return `

<section id="benefits">

<div class="section-heading">

<span>BENEFITS</span>

<h2>

Why Become a Faculty Ambassador?

</h2>

<p>

Beyond recognition, you'll gain access to an inspiring ecosystem of innovators, mentors, founders and opportunities while creating lasting impact within your institution.

</p>

</div>

<div class="benefits-grid">

${benefits.map(item=>`

<div class="benefit-card">

<div class="benefit-icon">

${item.icon}

</div>

<h3>${item.title}</h3>

<p>${item.text}</p>

</div>

`).join("")}

</div>

<div class="benefit-highlight">

<h2>

"One Faculty Member can inspire hundreds of future innovators."

</h2>

<p>

Your leadership can shape ideas into startups, encourage innovation-driven thinking, and create an entrepreneurial culture that lasts for generations.

</p>

<a href="https://forms.gle/9u9xVDaMo4zPvoa98" target="_blank">

Become a Faculty Ambassador →

</a>

</div>

</section>

`;

}