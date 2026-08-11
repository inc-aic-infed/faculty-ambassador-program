export default function Roles() {

    const roles = [

        {
            icon:"💡",
            title:"Lead Innovation",
            text:"Drive innovation and entrepreneurship initiatives within your institution by creating awareness and encouraging participation."
        },

        {
            icon:"🚀",
            title:"Promote Entrepreneurship",
            text:"Inspire students to explore startup opportunities, competitions, hackathons and innovation programs."
        },

        {
            icon:"🔍",
            title:"Identify Innovators",
            text:"Recognize promising students and innovative ideas that can be nurtured through AIC-INFED."
        },

        {
            icon:"🤝",
            title:"Connect Students",
            text:"Bridge the gap between your institution and the AIC-INFED innovation ecosystem."
        },

        {
            icon:"🎯",
            title:"Conduct Activities",
            text:"Organize at least three flagship innovation and entrepreneurship engagements every academic year."
        },

        {
            icon:"📊",
            title:"Share Impact",
            text:"Provide periodic updates highlighting student participation, activities and innovation outcomes."
        }

    ];

    return `

<section id="roles">

<div class="section-heading">

<span>ROLES & RESPONSIBILITIES</span>

<h2>

What You'll Do as a Faculty Ambassador

</h2>

<p>

As a Faculty Ambassador, you'll play a vital role in nurturing innovation, connecting students with opportunities, and strengthening the entrepreneurial ecosystem within your institution.

</p>

</div>

<div class="roles-grid">

${roles.map(role=>`

<div class="role-card">

<div class="role-icon">

${role.icon}

</div>

<h3>${role.title}</h3>

<p>${role.text}</p>

</div>

`).join("")}

</div>

</section>

`;

}