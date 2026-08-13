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


    const journey = [

        {
            title: "APPLY",
            subtitle: "Put Your Intent Forward."
        },

        {
            title: "EARN YOUR PLACE",
            subtitle: "Selected on Merit."
        },

        {
            title: "ENTER THE CIRCLE",
            subtitle: "Begin Your AIC-INFED Journey."
        },

        {
            title: "TAKE THE MANTLE",
            subtitle: "Step Into the Role of Faculty Ambassador."
        },

        {
            title: "ACTIVATE YOUR CAMPUS",
            subtitle: "Turn Innovation Into Action."
        },

        {
            title: "CONNECT & AMPLIFY",
            subtitle: "Extend Opportunity Across Your Institution."
        },

        {
            title: "GRADUATE INTO THE NETWORK",
            subtitle: "Carry the Association Forward."
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
</div>


        <div class="faculty-journey">

            <div class="journey-heading">

                <span>
                    THE FACULTY AMBASSADOR JOURNEY
                </span>

                <h3>
                    One Year. Seven Defining Moments.
                    <em>A Lasting Institutional Imprint.</em>
                </h3>

            </div>


            <div class="journey-track">

                ${journey.map((item, index) => `

                    <div class="journey-stage">

                        <div class="journey-marker">
                            <span>
                                ${String(index + 1).padStart(2, "0")}
                            </span>
                        </div>

                        <div class="journey-copy">

                            <h4>
                                ${item.title}
                            </h4>

                            <p>
                                ${item.subtitle}
                            </p>

                        </div>

                    </div>

                `).join("")}

            </div>


            <div class="journey-closing">

                <p>
                    A one-year journey from individual intent to institutional influence—
                    designed to strengthen the people, pathways and possibilities that
                    shape entrepreneurship on campus.
                </p>

            </div>

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
