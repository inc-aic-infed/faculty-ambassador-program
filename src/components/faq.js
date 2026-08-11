export default function FAQ() {

    const faqs = [

        {
            question: "Who can apply for the Faculty Ambassador Program?",
            answer: "IIC Members, E-Cell Co-ordinators & Incubation representatives from Higher Educational Institutions, Universities, Engineering Colleges, Management Institutes and other academic institutions who are passionate about innovation and entrepreneurship can apply."
        },

        {
            question: "Is there any application fee?",
            answer: "No. There is no application or participation fee for becoming an AIC-INFED Faculty Ambassador."
        },

        {
            question: "What is expected from a Faculty Ambassador?",
            answer: "Faculty Ambassadors are expected to promote innovation and entrepreneurship, identify promising student innovators, connect them with AIC-INFED and organize innovation-related engagements within their institution."
        },

        {
            question: "Will I receive a certificate or recognition?",
            answer: "Yes. Selected Faculty Ambassadors will receive official recognition from AIC-INFED and opportunities to participate in various ecosystem activities."
        },

        {
            question: "How do I apply?",
            answer: "Simply click on the 'Become a Faculty Ambassador' button available on this page and complete the online application form."
        }

    ];

    return `

<section id="faq">

<div class="section-heading">

<span>FREQUENTLY ASKED QUESTIONS</span>

<h2>Everything You Need to Know</h2>

<p>

Find answers to some of the most common questions about the Faculty Ambassador Program.

</p>

</div>

<div class="faq-container">

${faqs.map(faq => `

<div class="faq-item">

<h3>${faq.question}</h3>

<p>${faq.answer}</p>

</div>

`).join("")}

</div>

</section>

`;

}