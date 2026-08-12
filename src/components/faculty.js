export default function Faculty() {

    const pillars = [

        {
            icon: "💡",
            title: "INSPIRE",
            subtitle: "Ignite the Ambition to Build.",
            text: "Cultivate a culture where curiosity is encouraged, ideas are explored and innovation becomes part of everyday learning."
        },

        {
            icon: "🔍",
            title: "IDENTIFY",
            subtitle: "Recognise the Signal in the Noise.",
            text: "Spot promising students, ideas and capabilities before their potential becomes visible to the wider innovation ecosystem."
        },

        {
            icon: "🧭",
            title: "ANCHOR",
            subtitle: "Be the First to Believe.",
            text: "Provide perspective, encouragement and direction when an idea is still finding its shape, giving innovators the confidence to take the first step."
        },

        {
            icon: "🌐",
            title: "CONNECT",
            subtitle: "Open the Right Doors.",
            text: "Create meaningful pathways to founders, mentors, industry experts, investors and opportunities that extend far beyond the campus."
        },

        {
            icon: "🏆",
            title: "CHAMPION",
            subtitle: "Give Potential a Platform.",
            text: "Advocate for promising student-led ideas, celebrate emerging talent and help provide the visibility needed to move ideas forward."
        },

        {
            icon: "📈",
            title: "AMPLIFY",
            subtitle: "Build a Culture, Not a Moment.",
            text: "Help individual acts of innovation evolve into a lasting culture of entrepreneurship, collaboration and creative problem-solving within your institution."
        }

    ];

    return `

<section id="faculty">

    <div class="faculty-container">

        <div class="faculty-intro">

            <span class="section-tag">
                WHY FACULTY MATTER
            </span>

            <h2>
                Every Innovation Ecosystem Needs an Anchor.
            </h2>

            <p>
                Every institution is home to extraordinary potential. Some of it arrives fully formed. Most of it is waiting to be recognised.
            </p>

            <p>
                What transforms that potential into possibility is often <strong>one educator who recognises talent early, asks a better question and opens a door.</strong>
            </p>

            <p>
                Faculty members occupy a unique position in that journey. They encounter students before the wider innovation ecosystem does. They see curiosity before it becomes confidence, and ideas before they become ventures.
            </p>

            <p>
                A Faculty Ambassador becomes that <strong>vital first connection between potential and possibility</strong>—creating the confidence, direction and access that every innovator needs at the beginning of their journey.
            </p>

        </div>

        <div class="faculty-grid">

            ${pillars.map(item => `

                <div class="faculty-card">

                    <div class="faculty-icon">
                        ${item.icon}
                    </div>

                    <h3>${item.title}</h3>

                    <h4>${item.subtitle}</h4>

                    <p>${item.text}</p>

                </div>

            `).join("")}

        </div>

        <div class="faculty-highlight">

            <div class="highlight-box">

                <h2>
                    One Faculty Ambassador can inspire hundreds of minds.
                </h2>

                <h3>
                    One Champion can shape the innovation culture of an entire institution.
                </h3>

            </div>

        </div>

    </div>

</section>

`;

}