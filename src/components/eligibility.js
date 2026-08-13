export default function Eligibility() {

    const applicants = [

        {
            icon: "🏛️",
            title: "IIC MEMBERS",
            subtitle: "Institution’s Innovation Council",
            text: "Faculty members associated with the Institution’s Innovation Council and actively driving campus innovation initiatives."
        },

        {
            icon: "🚀",
            title: "E-CELL COORDINATORS",
            subtitle: "Entrepreneurship & Startup Leadership",
            text: "Faculty members leading entrepreneurship cells, startup activities and innovation-focused student engagements within their institutions."
        },

        {
            icon: "🔬",
            title: "INCUBATION CENTRE REPRESENTATIVES",
            subtitle: "Incubation & Entrepreneurship Centres",
            text: "Faculty members managing, coordinating or actively associated with incubation centres and entrepreneurship initiatives."
        }

    ];


    return `

<section id="eligibility">

    <div class="eligibility-container">


        <div class="section-heading eligibility-heading">

            <span>
                ELIGIBILITY & OPPORTUNITIES
            </span>

            <h2>
                Who Can Apply?
            </h2>

            <p>
                The programme is intended for faculty members from
                <strong>recognised Higher Education Institutions (HEIs)</strong>
                who have demonstrated experience and sustained engagement in
                innovation, entrepreneurship and student development.
            </p>

        </div>


        <div class="eligibility-intro">

            <span>
                IDEAL APPLICANTS INCLUDE
            </span>

        </div>


        <div class="eligibility-grid">

            ${applicants.map((item) => `

                <article class="eligibility-card">

                    <div class="eligibility-icon">
                        ${item.icon}
                    </div>

                    <h3>
                        ${item.title}
                    </h3>

                    <h4>
                        ${item.subtitle}
                    </h4>

                    <p>
                        ${item.text}
                    </p>

                </article>

            `).join("")}

        </div>


        <div class="eligibility-note">

            <div class="eligibility-note-item">

                <span>SELECTION</span>

                <strong>
                    Merit-Based
                </strong>

            </div>


            <div class="eligibility-divider"></div>


            <div class="eligibility-note-item">

                <span>DURATION</span>

                <strong>
                    One Year
                </strong>

            </div>


            <div class="eligibility-divider"></div>


            <div class="eligibility-note-item">

                <span>PROGRAMME FEE</span>

                <strong>
                    No Cost
                </strong>

            </div>

        </div>


        <p class="eligibility-footnote">
            Participation in the Faculty Ambassador Programme is offered
            at no cost to selected faculty members.
        </p>


    </div>

</section>

`;

}