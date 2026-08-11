export default function Faculty() {

    const pillars = [

        {
            icon: "💡",
            title: "Inspire",
            text: "Spark entrepreneurial thinking and encourage students to transform ideas into impactful ventures."
        },

        {
            icon: "🔍",
            title: "Identify",
            text: "Recognize high-potential innovators early and help them discover opportunities beyond the classroom."
        },

        {
            icon: "🤝",
            title: "Mentor",
            text: "Guide students from ideas to prototypes by providing direction, encouragement and support."
        },

        {
            icon: "🌐",
            title: "Connect",
            text: "Bridge students with AIC-INFED, mentors, founders, industry experts and startup programs."
        }

    ];

    return `

<section id="faculty">

<div class="faculty-container">

<div class="faculty-intro">

<span class="section-tag">WHY FACULTY MATTER</span>

<h2>Every Innovation Ecosystem Needs a Champion.</h2>

<p>

Faculty members shape careers, inspire confidence and unlock potential.
As an AIC-INFED Faculty Ambassador, you become the catalyst who helps students discover innovation, entrepreneurship and startup opportunities.

</p>

</div>

<div class="faculty-grid">

${pillars.map(item => `

<div class="faculty-card">

<div class="faculty-icon">

${item.icon}

</div>

<h3>${item.title}</h3>

<p>${item.text}</p>

</div>

`).join("")}

</div>

<div class="faculty-highlight">

<div class="highlight-box">

<h3>One Faculty Member.</h3>

<h2>Hundreds of Future Innovators.</h2>

<p>

A single faculty ambassador can inspire an entire campus to think differently,
innovate boldly and build the startups of tomorrow.

</p>

</div>

</div>

</div>

</section>

`;

}