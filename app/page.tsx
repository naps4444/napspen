"use client";

import "./page.css";
import Link from "next/link";

const guides = [
  {
    title: "The Practical Retirement Guide",
    price: "$9.99",
    oldPrice: "$15.00",
  },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-mark">N</span>
            <span>NAPSPEN</span>
          </div>

          <a href="#guides" className="header-link">
            View Guides
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              PRACTICAL GUIDES FOR REAL LIFE
            </div>

            <h1>
              Get practical answers to{" "}
              <span>problems that matter.</span>
            </h1>

            <p className="hero-text">
              Napspen Solutions creates simple, practical digital guides
              designed to help you understand difficult topics, avoid common
              mistakes, and take confident action.
            </p>

            <div className="hero-actions">
              <a href="#guides" className="primary-button">
                Explore Our Guides
                <span>→</span>
              </a>

              <a href="#how-it-works" className="secondary-button">
                How It Works
              </a>
            </div>

            <div className="trust-row">
              <div>
                <strong>Practical</strong>
                <span>Easy to understand</span>
              </div>

              <div>
                <strong>Actionable</strong>
                <span>Built for real situations</span>
              </div>

              <div>
                <strong>Digital</strong>
                <span>Access from anywhere</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-glow"></div>

            <div className="guide-preview">
              <div className="guide-top">
                <span>NAPSPEN SOLUTIONS</span>
                <span>01</span>
              </div>

              <div className="guide-content">
                <p className="guide-label">PRACTICAL GUIDE</p>

                <h2>
                  Plan Your
                  <br />
                  Retirement
                  <br />
                  With Confidence
                </h2>

                <p>
                  A practical guide to making smarter retirement decisions.
                </p>
              </div>

              <div className="guide-bottom">
                <span>NAPSPEN</span>
                <span>2026 EDITION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-label">WHY NAPSPEN?</p>

            <h2>
              Information is everywhere.
              <br />
              <span>Useful information is not.</span>
            </h2>

            <p>
              Searching through dozens of articles and videos can leave you
              more confused than when you started. Our guides turn complicated
              subjects into clear, practical steps you can actually use.
            </p>
          </div>

          <div className="benefits">
            <div className="benefit">
              <div className="benefit-number">01</div>

              <h3>Clear & Simple</h3>

              <p>
                No unnecessary jargon. We break complicated subjects down into
                language that is easy to understand.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">02</div>

              <h3>Practical Solutions</h3>

              <p>
                Our guides focus on what you can actually do, not just theory
                and general information.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">03</div>

              <h3>Made For You</h3>

              <p>
                Each guide focuses on a specific problem so you can get the
                information you need without wasting time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="guides-section" id="guides">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">OUR GUIDES</p>

            <h2>Start with a guide that solves your problem.</h2>

            <p>
              Choose a practical digital guide, learn at your own pace, and
              start taking action.
            </p>
          </div>

          <div className="guide-product">
            <div className="product-cover">
              <div className="cover-inner">
                <span className="cover-brand">
                  NAPSPEN SOLUTIONS
                </span>

                <div>
                  <small>THE PRACTICAL GUIDE TO</small>

                  <h3>
                    RETIREMENT
                    <br />
                    PLANNING
                  </h3>

                  <p>
                    Understand your options.
                    <br />
                    Avoid costly mistakes.
                    <br />
                    Plan with confidence.
                  </p>
                </div>

                <span className="cover-author">
                  BY NAPSPEN
                </span>
              </div>
            </div>

            <div className="product-info">
              <span className="product-tag">
                DIGITAL GUIDE
              </span>

              <h3>{guides[0].title}</h3>

              <p>
                Retirement planning can feel complicated. This guide gives you
                a straightforward framework for understanding the modern
                retirement landscape and making better-informed decisions.
              </p>

              <ul>
                <li>
                  Understand the modern retirement landscape
                </li>

                <li>
                  Identify common retirement planning mistakes
                </li>

                <li>
                  Learn practical planning strategies
                </li>

                <li>
                  Build a clearer picture of your retirement goals
                </li>

                <li>
                  Follow an actionable planning framework
                </li>
              </ul>

              <div className="price-row">
                <div>
                  <span className="old-price">
                    {guides[0].oldPrice}
                  </span>

                  <strong>
                    {guides[0].price}
                  </strong>
                </div>

                <span className="offer">
                  LIMITED OFFER
                </span>
              </div>

              <Link
                href="/checkout"
                className="buy-button"
              >
                Get The Guide
                <span>→</span>
              </Link>

              <p className="secure-note">
                Instant digital access • Secure payment
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="how-section"
        id="how-it-works"
      >
        <div className="container">
          <div className="section-heading centered">
            <p className="section-label">
              HOW IT WORKS
            </p>

            <h2>
              Simple from start to finish.
            </h2>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>

              <h3>Choose your guide</h3>

              <p>
                Find the guide that matches the problem you are trying to
                solve.
              </p>
            </div>

            <div className="step">
              <span>02</span>

              <h3>Make your payment</h3>

              <p>
                Complete your purchase through our secure checkout process.
              </p>
            </div>

            <div className="step">
              <span>03</span>

              <h3>Start learning</h3>

              <p>
                Get your digital guide and start applying what you learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="cta-section"
        id="checkout"
      >
        <div className="container cta-inner">
          <p className="section-label">
            READY TO TAKE ACTION?
          </p>

          <h2>
            Stop searching.
            <br />
            Start solving.
          </h2>

          <p>
            Get practical information designed to help you move from confusion
            to clarity.
          </p>

          <a
            href="#guides"
            className="primary-button light-button"
          >
            Explore Available Guides
            <span>→</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="logo footer-logo">
              <span className="logo-mark">N</span>
              <span>NAPSPEN</span>
            </div>

            <p>
              Practical knowledge. Real solutions.
            </p>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Napspen Solutions. All rights
            reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}