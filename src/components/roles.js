export default function Role() {

    const responsibilities = [

        {
            icon: "🔎",
            title: "RECOGNISE POTENTIAL",
            subtitle: "See Possibility Before It Seeks Recognition.",
            text: "Identify students whose curiosity, resilience and imagination suggest exceptional promise, and encourage them to pursue ideas capable of creating meaningful impact."
        },

        {
            icon: "🌉",
            title: "CREATE PATHWAYS",
            subtitle: "Bridge Talent with Opportunity.",
            text: "Connect aspiring innovators with mentors, founders, researchers, industry experts and programmes that expand both their perspective and their potential."
        },

        {
            icon: "🌱",
            title: "CULTIVATE CULTURE",
            subtitle: "Build an Environment Where Innovation Thrives.",
            text: "Encourage entrepreneurial thinking, interdisciplinary collaboration and intellectual curiosity so that innovation becomes part of everyday academic life."
        },

        {
            icon: "📣",
            title: "ADVOCATE",
            subtitle: "Champion Ideas Worth Pursuing.",
            text: "Support promising student-led initiatives by providing encouragement, visibility and guidance during the earliest stages of their innovation journey."
        },

        {
            icon: "🎯",
            title: "LEAD",
            subtitle: "Demonstrate Leadership Through Action.",
            text: "Facilitate innovation engagements, encourage participation and contribute consistently to strengthening your institution's culture of innovation."
        },

        {
            icon: "🤝",
            title: "REPRESENT",
            subtitle: "Strengthen an Enduring Partnership.",
            text: "Serve as the institutional bridge between your campus and AIC-INFED, fostering meaningful collaboration and long-term engagement across the innovation ecosystem."
        }

    ];

    return `

<section id="role">

    <div class="role-container">

        <div class="section-heading role-heading">

            <span>
                THE RESPONSIBILITY OF LEADERSHIP
            </span>

            <h2>
                The Work Behind Every Innovation Ecosystem.
            </h2>

            <p>
                Innovation rarely begins with funding or infrastructure. More often, it begins with an educator who recognises potential before it becomes visible to everyone else.
            </p>

            <p>
                Every thriving innovation ecosystem is shaped by individuals who ask better questions, encourage thoughtful risk-taking and create opportunities long before success becomes evident.
            </p>

            <p>
                The AIC-INFED Faculty Ambassador Programme recognises that meaningful institutional change is not driven by initiatives alone. It is sustained by educators who choose to invest their time, judgement and influence in the people who will define the future.
            </p>

            <p>
                This role is not an additional responsibility. It is an opportunity to shape the conditions in which innovation can flourish.
            </p>

        </div>


        <div class="role-grid">

            ${responsibilities.map((item) => `

                <article class="role-card">

                    <div class="role-card-header">

                        <div class="role-icon">
                            ${item.icon}
                        </div>

                    </div>

                    <div class="role-card-content">

                        <h3>${item.title}</h3>

                        <h4>${item.subtitle}</h4>

                        <p>${item.text}</p>

                    </div>

                </article>

            `).join("")}

        </div>


        <div class="role-highlight">

            <span class="role-highlight-line"></span>

            <h2>
                Every institution remembers the ideas that changed it.
            </h2>

            <h3>
                Those ideas are remembered because someone chose to recognise their potential before anyone else did.
            </h3>

        </div>

    </div>

</section>

`;

}