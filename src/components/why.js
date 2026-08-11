export default function Why() {

    const cards = [

        {
            icon: "🚀",
            title: "Startup Ecosystem",
            text: "Gain access to AIC-INFED's vibrant startup ecosystem and innovation initiatives."
        },

        {
            icon: "👨🏻‍🏫",
            title: "Mentorship",
            text: "Interact with founders, industry experts, and startup mentors."
        },

        {
            icon: "💰",
            title: "Funding Opportunities",
            text: "Learn about grants, incubation, and startup funding pathways."
        },

        {
            icon: "🌍",
            title: "National Exposure",
            text: "Represent your institution and connect with innovators across India."
        },

        {
            icon: "🏢",
            title: "Incubation Support",
            text: "Explore incubation opportunities for your startup ideas."
        },

        {
            icon: "💡",
            title: "Innovation Programs",
            text: "Participate in hackathons, bootcamps, and innovation challenges."
        },

        {
            icon: "🤝",
            title: "Networking",
            text: "Build meaningful relationships with entrepreneurs and ecosystem partners."
        },

        {
            icon: "📈",
            title: "Leadership",
            text: "Develop leadership, communication, and event management skills."
        }

    ];

    return `

    <section id="why">

        <div class="section-heading">

            <span>WHY AIC-INFED</span>

            <h2>
                Your Gateway to India's Innovation Ecosystem
            </h2>

            <p>
                The Faculty Ambassador Program empowers students and faculty to lead entrepreneurship and innovation initiatives within their institutions while connecting with AIC-INFED's national ecosystem.
            </p>

        </div>

        <div class="why-grid">

            ${cards.map(card => `

                <div class="why-card">

                    <div class="icon">${card.icon}</div>

                    <h3>${card.title}</h3>

                    <p>${card.text}</p>

                </div>

            `).join("")}

        </div>

    </section>

    `;

}