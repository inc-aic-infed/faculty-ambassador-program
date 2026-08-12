export default function Benefits() {

    const benefits = [

        {
            icon: "🎓",
            title: "INTELLECTUAL CAPITAL",
            subtitle: "Stay at the Edge of What Is Emerging.",
            text: "Gain curated exposure to frontier thinking in technology, entrepreneurship and venture building through masterclasses, leadership dialogues and exchanges with accomplished founders, practitioners and ecosystem leaders."
        },

        {
            icon: "🏛️",
            title: "INSTITUTIONAL LEVERAGE",
            subtitle: "Turn Individual Access into Institutional Advantage.",
            text: "Extend the value of your association with AIC-INFED to your institution through access to relevant expertise, innovation programmes, entrepreneurial opportunities and ecosystem connections."
        },

        {
            icon: "🏅",
            title: "PROFESSIONAL STATURE",
            subtitle: "Give Your Innovation Leadership a Wider Identity.",
            text: "Receive formal recognition as an AIC-INFED Faculty Ambassador—adding a distinguished ecosystem association to the innovation and entrepreneurship work you already champion within your institution."
        },

        {
            icon: "🔑",
            title: "PRIVILEGED ECOSYSTEM PROXIMITY",
            subtitle: "Enter Conversations That Rarely Reach the Classroom.",
            text: "Gain curated access to selected founder interactions, leadership conversations, innovation forums and ecosystem engagements that bring you closer to the people, perspectives and developments shaping entrepreneurship."
        },

        {
            icon: "🌐",
            title: "A HIGH-CALIBRE PEER CIRCLE",
            subtitle: "Connect With Faculty Who Share Your Ambition for Innovation.",
            text: "Become part of a cross-institutional community of innovation-active educators—opening avenues for meaningful professional relationships, exchange of perspectives and connections beyond your immediate academic network."
        }

    ];

    return `

<section id="benefits">

    <div class="benefits-container">

        <div class="section-heading benefits-heading">

            <span>
                BEYOND RECOGNITION. TOWARDS INFLUENCE.
            </span>

            <h2>
                The Distinction of Becoming an AIC-INFED Faculty Ambassador.
            </h2>

            <p>
                You already create impact within your institution.
                The Faculty Ambassador Programme is designed to extend
                the reach of that influence.
            </p>

            <p>
                Through distinguished learning, institutional leverage,
                professional recognition and privileged ecosystem access,
                AIC-INFED connects your existing leadership to a larger
                world of ideas, people and possibilities.
            </p>

        </div>


        <div class="benefits-grid">

            ${benefits.map((item, index) => `

                <article class="benefit-card">

                    <div class="benefit-top">

                        <div class="benefit-icon">
                            ${item.icon}
                        </div>

                    </div>


                    <div class="benefit-content">

                        <h3>
                            ${item.title}
                        </h3>

                        <h4>
                            ${item.subtitle}
                        </h4>

                        <p>
                            ${item.text}
                        </p>

                    </div>

                </article>

            `).join("")}

        </div>


        <div class="benefit-highlight">

            <span class="benefit-highlight-label">
                THE DISTINCTION
            </span>

            <h2>
                Leadership is measured not only by what we achieve.
            </h2>

            <h3>
                It is measured by the opportunities we create for others.
            </h3>

            <a
                href="https://forms.gle/9u9xVDaMo4zPvoa98"
                target="_blank"
                rel="noopener noreferrer"
            >
                Apply as Faculty Ambassador →
            </a>

        </div>

    </div>

</section>

`;

}