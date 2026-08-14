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
            Get The Guide
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              2026 RETIREMENT PLANNING GUIDE
            </div>

            <h1>
              Don’t just hope you’re
              <br />
              <span>ready for retirement.</span>
            </h1>

            <p className="hero-text">
              Understand what your retirement may actually require, identify
              the risks that could derail your plans, and build a clearer path
              toward the retirement you want.
            </p>

            <p className="hero-text">
              <strong>
                The Practical Retirement Guide
              </strong>{" "}
              turns complicated retirement decisions into clear concepts,
              practical strategies, useful calculations, and actionable
              planning exercises you can work through at your own pace.
            </p>

            <div className="hero-actions">
              <a href="#guides" className="primary-button">
                Get The Retirement Guide
                <span>→</span>
              </a>

              <a href="#whats-inside" className="secondary-button">
                See What’s Inside
              </a>
            </div>

            <div className="trust-row">
              <div>
                <strong>Practical</strong>
                <span>Built for real decisions</span>
              </div>

              <div>
                <strong>Comprehensive</strong>
                <span>19 pages of focused guidance</span>
              </div>

              <div>
                <strong>2026 Edition</strong>
                <span>Current retirement topics</span>
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
                <p className="guide-label">
                  2026 RETIREMENT GUIDE
                </p>

                <h2>
                  Plan Your
                  <br />
                  Retirement
                  <br />
                  With Confidence
                </h2>

                <p>
                  Understand the numbers.
                  <br />
                  Manage the risks.
                  <br />
                  Plan your next move.
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

      {/* PROBLEM */}
      <section className="problem-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-label">
              RETIREMENT IS MORE THAN SAVING
            </p>

            <h2>
              Having a retirement account
              <br />
              <span>doesn’t automatically mean you’re ready.</span>
            </h2>

            <p>
              Retirement planning involves much more than putting money into an
              account. You need to think about how much income you will need,
              how long your money may need to last, inflation, market declines,
              healthcare, Social Security, taxes, long-term care and what
              happens to your assets if you become unable to manage them.
            </p>

            <p>
              The Practical Retirement Guide brings these moving pieces
              together so you can see the bigger picture and make more
              informed decisions.
            </p>
          </div>

          <div className="benefits">
            <div className="benefit">
              <div className="benefit-number">01</div>

              <h3>
                Know Your Retirement Number
              </h3>

              <p>
                Learn how income replacement, the Rule of 25 and the 4% rule
                can help you estimate the portfolio you may need to support
                your retirement income.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">02</div>

              <h3>
                Understand The Risks
              </h3>

              <p>
                Explore longevity risk, inflation, healthcare costs,
                sequence-of-returns risk, excessive withdrawals and
                investment concentration before they become expensive
                surprises.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">03</div>

              <h3>
                Turn Information Into Action
              </h3>

              <p>
                Use practical planning exercises to organize your expenses,
                income gap, investments, beneficiaries, retirement timeline
                and other important decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="guides-section" id="whats-inside">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">
              WHAT’S INSIDE THE GUIDE
            </p>

            <h2>
              Everything you need to see
              <br />
              retirement from a bigger picture.
            </h2>

            <p>
              Instead of piecing together information from dozens of websites,
              videos and financial articles, work through the major retirement
              decisions in one focused guide.
            </p>
          </div>

          <div className="benefits">
            <div className="benefit">
              <div className="benefit-number">01</div>

              <h3>
                Your Retirement Target
              </h3>

              <p>
                Understand income replacement, the Rule of 25, the Bengen 4%
                rule and the importance of planning for a long retirement.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">02</div>

              <h3>
                Retirement Savings Vehicles
              </h3>

              <p>
                Get an overview of major U.S. retirement savings vehicles,
                including 401(k)s, 403(b)s, 457 plans, Traditional and Roth
                IRAs, HSAs and contribution considerations.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">03</div>

              <h3>
                Social Security
              </h3>

              <p>
                Understand the claiming spectrum from age 62 through 70,
                Full Retirement Age, delayed retirement credits and how
                claiming age can affect your lifetime benefit.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">04</div>

              <h3>
                Medicare & Healthcare
              </h3>

              <p>
                Explore Medicare Parts A, B, C and D, Medigap, Medicare
                Advantage, enrollment considerations and potential income
                related surcharges.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">05</div>

              <h3>
                Long-Term Care
              </h3>

              <p>
                Understand why Medicare does not cover custodial long-term
                care and why planning for future care needs should happen
                before health underwriting becomes difficult.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">06</div>

              <h3>
                Inflation & Purchasing Power
              </h3>

              <p>
                See how even moderate inflation can reduce the real purchasing
                power of your retirement savings over a multi-decade
                retirement.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">07</div>

              <h3>
                Investing In Retirement
              </h3>

              <p>
                Explore asset allocation, equities, fixed income,
                inflation-protected securities, rebalancing and the
                three-bucket approach to retirement investing.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">08</div>

              <h3>
                Common Retirement Mistakes
              </h3>

              <p>
                Identify avoidable problems such as excessive withdrawals,
                concentration in one company, high-interest debt,
                insufficient liquidity and poor tax diversification.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">09</div>

              <h3>
                Retirement Budgeting
              </h3>

              <p>
                Separate essential and discretionary expenses and understand
                how spending can change across the Go-Go, Slow-Go and No-Go
                phases of retirement.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">10</div>

              <h3>
                Estate Planning
              </h3>

              <p>
                Review wills, trusts, financial powers of attorney, healthcare
                directives and beneficiary designations so your retirement
                plan also considers your family and future incapacity.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">11</div>

              <h3>
                Retirement Milestones
              </h3>

              <p>
                Keep track of important ages and planning windows involving
                retirement accounts, Social Security, Medicare, catch-up
                contributions and required distributions.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">12</div>

              <h3>
                2026 Retirement Trends
              </h3>

              <p>
                Review major 2026-focused retirement planning developments
                covered in the guide, including SECURE 2.0 provisions and
                other current planning considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="guides-section" id="guides">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-label">
              THE PRACTICAL RETIREMENT GUIDE
            </p>

            <h2>
              One guide.
              <br />
              A clearer retirement plan.
            </h2>

            <p>
              Stop collecting disconnected retirement advice. Start working
              through the decisions that actually matter.
            </p>
          </div>

          <div className="guide-product">
            <div className="product-cover">
              <div className="cover-inner">
                <span className="cover-brand">
                  NAPSPEN SOLUTIONS
                </span>

                <div>
                  <small>
                    THE PRACTICAL GUIDE TO
                  </small>

                  <h3>
                    RETIREMENT
                    <br />
                    PLANNING
                  </h3>

                  <p>
                    Understand your options.
                    <br />
                    Identify the risks.
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
                2026 DIGITAL GUIDE
              </span>

              <h3>
                {guides[0].title}
              </h3>

              <p>
                Retirement can feel overwhelming because there is no single
                decision that determines whether you are ready.
              </p>

              <p>
                You have to consider your desired lifestyle, future expenses,
                savings, investment risk, inflation, Social Security,
                healthcare, taxes, long-term care and the possibility of
                living much longer than expected.
              </p>

              <p>
                This guide brings those decisions together in a practical,
                easy-to-follow framework designed to help you move from
                uncertainty to a clearer plan.
              </p>

              <ul>
                <li>
                  Calculate and understand your potential retirement income
                  gap
                </li>

                <li>
                  Use the Rule of 25 and 4% rule as retirement planning
                  reference points
                </li>

                <li>
                  Understand Social Security claiming considerations
                </li>

                <li>
                  Prepare for Medicare, healthcare and long-term care costs
                </li>

                <li>
                  Understand inflation and its impact on purchasing power
                </li>

                <li>
                  Explore retirement asset allocation and the three-bucket
                  approach
                </li>

                <li>
                  Identify common mistakes that can damage retirement
                  readiness
                </li>

                <li>
                  Build a retirement budget around essential and discretionary
                  spending
                </li>

                <li>
                  Review estate planning and beneficiary considerations
                </li>

                <li>
                  Keep track of important retirement milestones and planning
                  windows
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
                Get The Guide For $9.99
                <span>→</span>
              </Link>

              <p className="secure-note">
                Instant digital access • Secure payment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKBOOK */}
      <section className="problem-section" id="workbook">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-label">
              MORE THAN INFORMATION
            </p>

            <h2>
              Don’t just read about retirement.
              <br />
              <span>Work through your own plan.</span>
            </h2>

            <p>
              The guide includes a practical workbook toolkit designed to help
              you translate retirement concepts into decisions you can
              actually evaluate.
            </p>
          </div>

          <div className="benefits">
            <div className="benefit">
              <div className="benefit-number">01</div>

              <h3>
                Expense Baseline Worksheet
              </h3>

              <p>
                Organize essential and discretionary retirement expenses to
                establish a clearer spending baseline.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">02</div>

              <h3>
                Income Gap Planner
              </h3>

              <p>
                Compare expected guaranteed income with your projected
                retirement expenses and identify the portfolio income you may
                need.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">03</div>

              <h3>
                Social Security Decision Matrix
              </h3>

              <p>
                Think through claiming strategies and the potential
                break-even considerations surrounding when you claim.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">04</div>

              <h3>
                Asset Allocation Audit
              </h3>

              <p>
                Review how your assets are distributed across pre-tax, Roth
                and taxable accounts.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">05</div>

              <h3>
                Three-Bucket Portfolio Allocator
              </h3>

              <p>
                Think through the roles of cash, fixed income and equity
                growth in a retirement portfolio.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">06</div>

              <h3>
                Tax-Smart Withdrawal Sequencer
              </h3>

              <p>
                Explore a structured approach to thinking about withdrawals
                from taxable, pre-tax and Roth accounts.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">07</div>

              <h3>
                Estate Beneficiary Audit
              </h3>

              <p>
                Create a central record of primary and contingent beneficiaries
                across important financial accounts.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">08</div>

              <h3>
                Incapacity & Fiduciary Directory
              </h3>

              <p>
                Organize important contacts for financial powers of attorney,
                healthcare proxies and other fiduciary roles.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">09</div>

              <h3>
                60-Month Retirement Countdown
              </h3>

              <p>
                Use the pre-retirement countdown framework to organize the
                final five years of preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY RISKS */}
      <section className="guides-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">
              WHAT COULD GO WRONG?
            </p>

            <h2>
              A strong retirement plan
              <br />
              prepares for the uncomfortable scenarios too.
            </h2>

            <p>
              Your retirement savings can be affected by risks that have
              little to do with how much you saved. The guide helps you
              understand the major threats that can undermine financial
              independence.
            </p>
          </div>

          <div className="benefits">
            <div className="benefit">
              <div className="benefit-number">01</div>

              <h3>
                Living Longer Than Expected
              </h3>

              <p>
                Your money may need to support you for decades after you stop
                working. Longevity planning helps reduce the danger of
                exhausting your resources too early.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">02</div>

              <h3>
                Market Declines Early in Retirement
              </h3>

              <p>
                Poor investment returns early in the withdrawal phase can
                have an outsized impact on portfolio longevity.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">03</div>

              <h3>
                Inflation
              </h3>

              <p>
                What costs $100,000 today will not necessarily cost $100,000
                decades from now. The guide shows how inflation compounds
                against purchasing power.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">04</div>

              <h3>
                Healthcare & Long-Term Care
              </h3>

              <p>
                Retirement healthcare and custodial care can create significant
                expenses that need to be considered before retirement.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">05</div>

              <h3>
                Excessive Withdrawals
              </h3>

              <p>
                Taking too much from a portfolio too early can make it harder
                for retirement assets to survive a long retirement.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">06</div>

              <h3>
                Concentration Risk
              </h3>

              <p>
                Relying too heavily on a single company or investment can
                expose your retirement to risks that diversification is
                designed to reduce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
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
              From uncertainty to a clearer plan.
            </h2>

            <p>
              You don't need to become a financial expert to start organizing
              your retirement decisions.
            </p>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>

              <h3>
                Understand where you stand
              </h3>

              <p>
                Learn the key numbers, retirement risks and financial
                considerations that should be part of your planning process.
              </p>
            </div>

            <div className="step">
              <span>02</span>

              <h3>
                Work through the numbers
              </h3>

              <p>
                Use the guide's formulas, examples and workbook exercises to
                examine your income, expenses, savings and retirement goals.
              </p>
            </div>

            <div className="step">
              <span>03</span>

              <h3>
                Decide what to do next
              </h3>

              <p>
                Turn what you learn into a practical list of decisions and
                conversations to have as you move toward retirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="problem-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-label">
              WHO IS THIS FOR?
            </p>

            <h2>
              If retirement is on your mind,
              <br />
              <span>this guide was made for you.</span>
            </h2>

            <p>
              Whether retirement is years away or getting closer, the guide
              gives you a structured way to think through the decisions that
              can affect your financial future.
            </p>
          </div>

          <div className="benefits">
            <div className="benefit">
              <div className="benefit-number">01</div>

              <h3>
                You’re Years Away
              </h3>

              <p>
                Build better habits early and understand the retirement
                decisions that become increasingly important as you get
                closer.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">02</div>

              <h3>
                Retirement Is Getting Closer
              </h3>

              <p>
                Organize your income, expenses, healthcare, investments and
                other important decisions before your retirement date arrives.
              </p>
            </div>

            <div className="benefit">
              <div className="benefit-number">03</div>

              <h3>
                You’re Already Retired
              </h3>

              <p>
                Review withdrawal risks, inflation, healthcare, spending,
                investment allocation and other factors that can affect
                long-term financial independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="cta-section"
        id="checkout"
      >
        <div className="container cta-inner">
          <p className="section-label">
            YOUR RETIREMENT DESERVES A PLAN
          </p>

          <h2>
            The earlier you understand
            <br />
            the numbers, the more choices you have.
          </h2>

          <p>
            Get The Practical Retirement Guide and start working through the
            income, investments, healthcare, risks, milestones and planning
            decisions that can shape your retirement.
          </p>

          <a
            href="#guides"
            className="primary-button light-button"
          >
            Get The Guide For $9.99
            <span>→</span>
          </a>

          <p>
            A practical educational resource for retirement planning.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="logo footer-logo">
              <span className="logo-mark">N</span>
              <span>NAPSPEN</span>
            </div>

            <p>
              Practical knowledge. Better decisions. A clearer future.
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