"use client";

import Link from "next/link";

export default function SuccessPage() {
  const guide = {
    title: "The Practical Retirement Guide",
    description:
      "A practical guide to understanding the modern retirement landscape, avoiding common mistakes, and making better-informed retirement decisions.",
    price: 9.99,
    currency: "USD",
  };

  return (
    <main className="success-page">
      {/* HEADER — SAME AS HOMEPAGE */}
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            <span className="logo-mark">N</span>
            <span>NAPSPEN</span>
          </Link>

          <Link href="/" className="header-link">
            Back to Home
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <section className="success-section">
        <div className="success-container">
          {/* SUCCESS ICON */}
          <div className="success-icon">
            <span>✓</span>
          </div>

          <p className="success-label">PAYMENT SUCCESSFUL</p>

          <h1>You're all set.</h1>

          <p className="success-description">
            Your payment has been successfully processed.
            Your guide is now ready for you.
          </p>

          {/* GUIDE CARD */}
          <div className="success-card">
            {/* GUIDE COVER */}
            <div className="guide-cover">
              <div className="guide-cover-inner">
                <span className="cover-brand">
                  NAPSPEN SOLUTIONS
                </span>

                <div className="cover-content">
                  <small>THE PRACTICAL GUIDE TO</small>

                  <h2>
                    RETIREMENT
                    <br />
                    PLANNING
                  </h2>

                  <p>
                    Understand your options.
                    <br />
                    Avoid costly mistakes.
                    <br />
                    Plan with confidence.
                  </p>
                </div>

                <span className="cover-author">BY NAPSPEN</span>
              </div>
            </div>

            {/* GUIDE DETAILS */}
            <div className="guide-details">
              <span className="product-label">DIGITAL GUIDE</span>

              <h2>{guide.title}</h2>

              <p className="guide-description">
                {guide.description}
              </p>

              {/* PURCHASE INFO */}
              <div className="purchase-info">
                <div className="purchase-info-item">
                  <span>Purchase status</span>

                  <strong className="paid-status">Paid</strong>
                </div>

                <div className="purchase-info-item">
                  <span>Amount paid</span>

                  <strong>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: guide.currency,
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(guide.price)}
                  </strong>
                </div>
              </div>

              {/* DOWNLOAD */}
              <a
                href="/guide/practical-retirement-guide.pdf"
                className="download-button"
                download="The-Practical-Retirement-Guide.pdf"
              >
                <span>Download Your Guide</span>

                <span className="download-icon">↓</span>
              </a>

              <p className="access-note">
                Your guide is a PDF document. Download it
                and keep it somewhere safe for future reference.
              </p>
            </div>
          </div>

          {/* NEXT STEPS */}
          <div className="next-steps">
            <p className="next-label">WHAT'S NEXT?</p>

            <h2>
              Start building a clearer retirement plan.
            </h2>

            <p>
              Read through the guide at your own pace and use
              the practical framework to start making better
              retirement decisions.
            </p>

            <Link href="/" className="home-button">
              <span>Return to Napspen</span>

              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="success-footer">
        <p>
          © {new Date().getFullYear()} Napspen Solutions.
          All rights reserved.
        </p>
      </footer>
    </main>
  );
}