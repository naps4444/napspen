"use client";

import Link from "next/link";

export default function FailedPage() {
  return (
    <main className="failed-page">

      {/* HEADER — SAME AS HOMEPAGE */}
      <header className="header">
        <div className="container header-inner">

          <Link href="/" className="logo">
            <span className="logo-mark">N</span>
            <span>NAPSPEN</span>
          </Link>

          <Link
            href="/checkout"
            className="header-link"
          >
            Back to Checkout
          </Link>

        </div>
      </header>

      {/* MAIN */}
      <section className="failed-section">
        <div className="failed-container">

          {/* ERROR ICON */}
          <div className="failed-icon">
            <span>×</span>
          </div>

          {/* LABEL */}
          <p className="failed-label">
            PAYMENT NOT CONFIRMED
          </p>

          {/* TITLE */}
          <h1 className="failed-title">
            We couldn't confirm
            <br />
            your payment.
          </h1>

          {/* DESCRIPTION */}
          <p className="failed-description">
            We could not confirm your payment.
            No access to the guide has been granted
            at this time.
          </p>

          {/* CARD */}
          <div className="failed-card">

            <div className="failed-card-icon">
              !
            </div>

            <div className="failed-card-content">

              <h2>
                Payment unsuccessful
              </h2>

              <p>
                Your payment may have been cancelled,
                declined, or interrupted before it could
                be completed.
              </p>

            </div>

          </div>

          {/* ACTIONS */}
          <div className="failed-actions">

            <Link
              href="/checkout"
              className="retry-button"
            >
              Try Payment Again
              <span>→</span>
            </Link>

            <Link
              href="/"
              className="home-button"
            >
              Return to Home
            </Link>

          </div>

          {/* HELP */}
          <p className="failed-help">
            If you were charged but did not receive
            your guide, please contact us before
            making another payment.
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="failed-footer">
        <p>
          © {new Date().getFullYear()} Napspen Solutions.
          All rights reserved.
        </p>
      </footer>

    </main>
  );
}