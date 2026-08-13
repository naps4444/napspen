"use client";

import { useState } from "react";
import Link from "next/link";
import "./page.css";

export default function CheckoutPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const guide = {
    title: "The Practical Retirement Guide",

    description:
      "Retirement planning can feel complicated. This guide gives you a straightforward framework for understanding the modern retirement landscape and making better-informed decisions.",

    // USD pricing
    price: 9.99,
    oldPrice: 15.0,
  };

  const formatUSD = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const handlePayment = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please enter your name and email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "/api/flutterwave/initialize",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),

            // Send USD payment information
            amount: guide.price,
            currency: "USD",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to initialize payment."
        );
      }

      if (!data?.payment_url) {
        throw new Error(
          "Flutterwave did not return a payment link."
        );
      }

      // Send customer to Flutterwave
      window.location.href = data.payment_url;
    } catch (error) {
      console.error(
        "Payment initialization error:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong while preparing your payment."
      );

      setLoading(false);
    }
  };

  return (
    <main className="checkout-page">

      {/* HEADER */}

      <header className="checkout-header">
        <div className="checkout-header-inner">

          <Link
            href="/"
            className="brand"
          >
            <span className="brand-mark">
              N
            </span>

            <span>
              NAPSPEN
            </span>
          </Link>

          <Link
            href="/"
            className="back-link"
          >
            ← Back to guide
          </Link>

        </div>
      </header>


      {/* CHECKOUT */}

      <section className="checkout-section">

        <div className="checkout-heading">

          <p className="checkout-label">
            Secure Checkout
          </p>

          <h1 className="checkout-title">
            Get Your Guide
          </h1>

          <p className="checkout-description">
            Enter your details below to complete
            your purchase.
          </p>

        </div>


        <div className="checkout-grid">

          {/* PRODUCT */}

          <div className="checkout-card product-card">

            <div className="product-image">

              <div className="product-cover-preview">

                <span className="cover-brand">
                  NAPSPEN SOLUTIONS
                </span>


                <div className="cover-content">

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


            <p className="product-label">
              DIGITAL GUIDE
            </p>


            <h2 className="product-title">
              {guide.title}
            </h2>


            <p className="product-description">
              {guide.description}
            </p>


            <hr className="divider" />


            {/* PRICE */}

            <div className="price-row">

              <span className="price-label">
                Guide price
              </span>


              <div className="checkout-price-container">

                <span className="checkout-old-price">
                  {formatUSD(guide.oldPrice)}
                </span>

                <span className="price">
                  {formatUSD(guide.price)}
                </span>

              </div>

            </div>


            {/* FEATURES */}

            <div className="features">

              <div className="feature">

                <span className="feature-check">
                  ✓
                </span>

                <span>
                  Understand the modern retirement
                  landscape
                </span>

              </div>


              <div className="feature">

                <span className="feature-check">
                  ✓
                </span>

                <span>
                  Identify common retirement
                  planning mistakes
                </span>

              </div>


              <div className="feature">

                <span className="feature-check">
                  ✓
                </span>

                <span>
                  Learn practical planning
                  strategies
                </span>

              </div>


              <div className="feature">

                <span className="feature-check">
                  ✓
                </span>

                <span>
                  Build a clearer picture of
                  your retirement goals
                </span>

              </div>


              <div className="feature">

                <span className="feature-check">
                  ✓
                </span>

                <span>
                  Follow an actionable planning
                  framework
                </span>

              </div>

            </div>

          </div>


          {/* CUSTOMER INFORMATION */}

          <div className="checkout-card customer-card">

            <h2 className="form-title">
              Your Information
            </h2>


            <p className="form-description">
              We'll use your email to send your
              guide after payment.
            </p>


            <form
              onSubmit={handlePayment}
              className="checkout-form"
            >

              {/* NAME */}

              <div className="form-group">

                <label
                  htmlFor="name"
                  className="form-label"
                >
                  Full name
                </label>


                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Enter your full name"
                  required
                  className="form-input"
                  autoComplete="name"
                />

              </div>


              {/* EMAIL */}

              <div className="form-group">

                <label
                  htmlFor="email"
                  className="form-label"
                >
                  Email address
                </label>


                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                  required
                  className="form-input"
                  autoComplete="email"
                />


                <p className="input-help">
                  Make sure this email is correct.
                  Your purchase information and
                  guide access will be associated
                  with it.
                </p>

              </div>


              {/* TOTAL */}

              <div className="total-box">

                <div className="total-row">

                  <span className="total-label">
                    Total
                  </span>


                  <div className="total-price-container">

                    <span className="total-old-price">
                      {formatUSD(guide.oldPrice)}
                    </span>

                    <span className="total-price">
                      {formatUSD(guide.price)}
                    </span>

                  </div>

                </div>

              </div>


              {/* PAYMENT BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="pay-button"
              >

                {loading
                  ? "Preparing payment..."
                  : `Pay ${formatUSD(guide.price)} with Flutterwave`}

              </button>


              {/* SECURITY */}

              <div className="security-text">

                <p>
                  Your payment will be processed
                  securely by Flutterwave. After
                  successful payment, you'll receive
                  access to your digital guide.
                </p>

              </div>

            </form>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="checkout-footer">

        <p>
          © {new Date().getFullYear()}
          {" "}
          Napspen Solutions.
          All rights reserved.
        </p>

      </footer>

    </main>
  );
}