export default function FAQ() {

    const faqs = [

        {
            question: "Who is eligible to become a Faculty Ambassador?",
            answer: "Faculty members from Higher Educational Institutions (HEIs) across India who are passionate about innovation, entrepreneurship and student development are encouraged to apply."
        },

        {
            question: "Is there any application or participation fee?",
            answer: "No. The Faculty Ambassador Programme is offered entirely free of cost. There are no application or participation charges at any stage of the programme."
        },

        {
            question: "What does the programme expect from Faculty Ambassadors?",
            answer: "Faculty Ambassadors serve as institutional catalysts for innovation by encouraging entrepreneurial thinking, identifying promising innovators, facilitating innovation-led engagements and connecting students with opportunities available through AIC-INFED."
        },

        {
            question: "How much time does the programme require?",
            answer: "The programme is designed to complement existing academic responsibilities. Engagements are distributed throughout the year, allowing ambassadors to contribute meaningfully while maintaining flexibility within their institutional commitments."
        },

        {
            question: "Will Faculty Ambassadors receive formal recognition?",
            answer: "Yes. Faculty Ambassadors who actively participate throughout the programme will receive an official Certificate of Recognition from AIC-INFED."
        },

        {
            question: "What opportunities become available through the programme?",
            answer: "Participants receive invitations to curated workshops, innovation forums, leadership dialogues, startup engagements, ecosystem events and other flagship initiatives organised by AIC-INFED."
        },

        {
            question: "How does the selection process work?",
            answer: "Admission to the Faculty Ambassador Programme is based entirely on the merit of each application. Every submission is evaluated by the AIC-INFED team against the programme's objectives and the applicant's potential to contribute meaningfully to the innovation ecosystem. Participation in the programme is offered at no cost to selected faculty members."
        },

        {
            question: "How can I apply?",
            answer: "Applications may be submitted through the online application form. Selected applicants will receive further communication regarding onboarding, orientation and the next steps of the programme."
        }

    ];

    return `

<section id="faq">

    <div class="faq-wrapper">

        <div class="section-heading faq-heading">

            <span>FAQ</span>

            <h2>
                Frequently Asked Questions
            </h2>

            <p>
                Choosing to become an AIC-INFED Faculty Ambassador is an important commitment. Below are answers to some of the questions educators frequently ask before applying to the programme.
            </p>

        </div>


        <div class="faq-container">

            ${faqs.map((faq, index) => `

                <article class="faq-item">

                    <div class="faq-number">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                    <div class="faq-content">

                        <h3>
                            ${faq.question}
                        </h3>

                        <p>
                            ${faq.answer}
                        </p>

                    </div>

                </article>

            `).join("")}

        </div>

    </div>

</section>

`;

}