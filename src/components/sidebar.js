import logo from "../assets/hero.png";

export default function Sidebar() {
  return `
    <aside class="sidebar">

      <div class="logo">
        <img src="${logo}" alt="AIC-INFED">
      </div>

      <div class="program-name">
        <h2>Faculty Ambassador Program</h2>
        <p>
          Empowering Educators.<br>
          Building Future Innovators.
        </p>
      </div>

      <nav class="navigation">
        <a href="#hero">🏠 Home</a>
        <a href="#about">📖 About Program</a>
        <a href="#why">🚀 Why AIC-INFED</a>
        <a href="#faculty">👨‍🏫 Why Faculty Matter</a>
        <a href="#eligibility">✓ Eligibility</a>
        <a href="#journey">🧭 Faculty Ambassador Journey</a>
        <a href="#role">📋 Roles & Responsibilities</a>
        <a href="#benefits">🏅 Benefits</a>
        <a href="#faq">❓ FAQ</a>
        <a href="#contact">📞 Contact</a>
      </nav>

      <div class="apply-buttons">
      <div class="sidebar-footer">

      <p>A Flagship Initiative of</p>

      <strong>AIC-INFED</strong>

      <span>AIC-IIM Nagpur Foundation for Entrepreneurship Development</span>

      </div>
        <a
          href="https://forms.gle/9u9xVDaMo4zPvoa98"
          target="_blank">
          Become a Faculty Ambassador →
        </a>
      </div>

    </aside>
  `;
}