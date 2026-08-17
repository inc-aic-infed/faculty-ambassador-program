export default function Journey() {

    const journey = [

        {
            number: "01",
            title: "APPLY",
            subtitle: "Put Your Intent Forward.",
            text: "Submit your application to join the inaugural Faculty Ambassador cohort."
        },

        {
            number: "02",
            title: "ONBOARD",
            subtitle: "Meet the Founding Cohort",
            text: "Begin the journey through an offline onboarding meet-up and connect with fellow Ambassadors from across institutions."
        },

        {
            number: "03",
            title: "INVESTITURE",
            subtitle: "Receive the AIC-INFED Association",
            text: "A formal Investiture Ceremony marks the commencement of your association as an AIC-INFED Faculty Ambassador."
        },

        {
            number: "04",
            title: "AMBASSADOR BOOTCAMP",
            subtitle: "One Day | Founding Cohort",
            text: `
                <strong>Align:</strong> Set the direction for the year.<br>
                <strong>Exchange:</strong> Share ideas and practices.<br>
                <strong>Plan:</strong> Shape institutional engagements.<br>
                <strong>Schedule:</strong> Finalise the annual calendar.<br>
                <strong>Connect:</strong> Explore collaboration opportunities.
            `
        },

        {
            number: "05",
            title: "CAMPUS ENGAGEMENT",
            subtitle: "Begin the Conversation",
            text: "Leverage your existing institutional experience to facilitate an entrepreneurship and innovation sensitization engagement within your institution."
        },

        {
            number: "06",
            title: "QUARTERLY MEETUP I",
            subtitle: "Return. Reconnect. Exchange.",
            text: "Come together with the Faculty Ambassador community to share experiences, perspectives and emerging possibilities."
        },

        {
            number: "07",
            title: "STUDENT BOOTCAMP",
            subtitle: "Create a Platform for Student Innovation",
            text: "Facilitate a student-focused bootcamp on entrepreneurship and innovation, drawing upon your experience and institutional context."
        },

        {
            number: "08",
            title: "QUARTERLY MEETUP II",
            subtitle: "Learn From the Collective.",
            text: "Reconnect with fellow Ambassadors and continue the exchange of ideas, experiences and institutional practices."
        },

        {
            number: "09",
            title: "FACULTY DEVELOPMENT BOOTCAMP",
            subtitle: "Extend the Conversation Across Campus",
            text: "Facilitate a faculty-focused engagement on entrepreneurship and innovation, creating space for wider institutional participation."
        },

        {
            number: "10",
            title: "QUARTERLY MEETUP III",
            subtitle: "Strengthen the Circle.",
            text: "Continue building relationships across the Ambassador community and reflect on the year's institutional engagements."
        },

        {
            number: "11",
            title: "FOLLOW-ON ENGAGEMENTS",
            subtitle: "Keep the Momentum Going",
            text: "Facilitate relevant follow-on initiatives such as innovation challenges, entrepreneurship engagements, Institutional Fundraising & Proposal Writing workshop."
        },

        {
            number: "12",
            title: "QUARTERLY MEET-UP IV",
            subtitle: "Complete the Founding Year",
            text: "Conclude the inaugural journey through the final quarterly meet-up and Valedictory & Graduation Ceremony, while continuing as part of the AIC-INFED Faculty Ambassador Network."
        }

    ];


    return `

<section id="journey">

    <div class="journey-container">

        <div class="journey-intro">

            <span class="section-tag">
                THE FACULTY AMBASSADOR JOURNEY
            </span>

            <h2>
                One Year.
                <span>From Association to Institutional Impact.</span>
            </h2>

            <p>
                The Faculty Ambassador Programme unfolds through a structured
                year-long journey of learning, exchange, institutional engagement
                and ecosystem participation.
            </p>

            <p>
                Each stage builds upon the last—creating opportunities to connect,
                contribute and strengthen innovation and entrepreneurship within
                your institution.
            </p>

        </div>


        <div class="journey-roadmap">

            ${journey.map((item, index) => `

                <article class="journey-item">

                    <div class="journey-number">
                        ${item.number}
                    </div>


                    <div class="journey-line">

                        <span class="journey-dot"></span>

                        ${
                            index !== journey.length - 1
                            ? `<span class="journey-connector"></span>`
                            : ``
                        }

                    </div>


                    <div class="journey-content">

                        <span class="journey-step">
                            STEP ${item.number}
                        </span>

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


        <div class="journey-end">

            <span>
                THE JOURNEY CONTINUES
            </span>

            <h3>
                A Founding Year That Builds a Continuing Network.
            </h3>

            <p>
                Graduation marks the completion of the formal one-year journey,
                while the association continues through the AIC-INFED Faculty
                Ambassador Network.
            </p>

        </div>

    </div>

</section>

`;

}