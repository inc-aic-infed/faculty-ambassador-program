export default function Why() {

    const cards = [

        {
            number: "01",
            title: "Inspire",
            subtitle: "Set the Ambition.",
            text: "Cultivate curiosity and entrepreneurial thinking. Encourage students to question convention, explore possibilities and engage with meaningful problems."
        },

        {
            number: "02",
            title: "Identify",
            subtitle: "Recognise Potential Early.",
            text: "See what others may overlook. Identify promising students, unconventional ideas and emerging innovators while their potential is still taking shape."
        },

        {
            number: "03",
            title: "Connect",
            subtitle: "Open the Right Doors.",
            text: "Create meaningful pathways between promising talent and the people, expertise and opportunities that can help ideas move forward."
        },

        {
            number: "04",
            title: "Catalyse",
            subtitle: "Turn Possibility Into Momentum.",
            text: "Help ideas move beyond conversation—towards experimentation, validation, creation and meaningful action."
        }

    ];

    return `

    <section id="why">

        <div class="why-container">

            <div class="section-heading why-heading">

                <span>WHY AIC-INFED</span>

                <h2>
                    Where Ambitious Ideas Find Their Ecosystem.
                </h2>

                <p>
                    Innovation does not flourish in isolation. It grows through
                    curiosity, conversation, mentorship and access to people who
                    have travelled the path before.
                </p>

                <p>
                    AIC-INFED brings these dimensions of the innovation ecosystem
                    closer to academic communities—connecting institutions with
                    founders, mentors, industry experts, investors and emerging
                    opportunities.
                </p>

            </div>

            <div class="why-grid">

                ${cards.map(card => `

                    <article class="why-card">

                        <div class="why-card-top">

                            <span class="why-number">
                                ${card.number}
                            </span>

                            <span class="why-line"></span>

                        </div>

                        <div class="why-card-content">

                            <h3>${card.title}</h3>

                            <h4>${card.subtitle}</h4>

                            <p>${card.text}</p>

                        </div>

                    </article>

                `).join("")}

            </div>

            <div class="why-closing">

                <span class="closing-mark">“</span>

                <p>
                    Innovation is built by people who know where to look—
                    and who know how to bring the right people into the room.
                </p>

            </div>

        </div>

    </section>

    `;

}