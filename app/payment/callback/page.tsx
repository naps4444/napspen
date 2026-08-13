"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "./page.css";

type PaymentState = "checking" | "success" | "failed";

interface VerificationResult {
  success: boolean;
  message?: string;

  transaction?: {
    id?: number;
    tx_ref?: string;
    amount?: number;
    currency?: string;
    status?: string;

    customer?: {
      email?: string;
      name?: string;
    };
  };
}

function PaymentCallbackContent() {
  const searchParams = useSearchParams();

  const [status, setStatus] =
    useState<PaymentState>("checking");

  const [message, setMessage] = useState("");

  const [transaction, setTransaction] =
    useState<VerificationResult["transaction"]>();

  useEffect(() => {
    const verifyPayment = async () => {
      const transactionId =
        searchParams.get("transaction_id");

      const txRef = searchParams.get("tx_ref");

      /*
       * Flutterwave should give us transaction_id
       * after redirecting the customer.
       */

      if (!transactionId) {
        setStatus("failed");

        setMessage(
          "We could not find the Flutterwave transaction ID."
        );

        return;
      }

      try {
        const query = new URLSearchParams();

        query.set(
          "transaction_id",
          transactionId
        );

        if (txRef) {
          query.set("tx_ref", txRef);
        }

        const response = await fetch(
          `/api/flutterwave/verify?${query.toString()}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data: VerificationResult =
          await response.json();

        console.log(
          "Payment verification result:",
          data
        );

        if (!response.ok || !data.success) {
          throw new Error(
            data.message ||
              "Payment verification failed."
          );
        }

        setTransaction(data.transaction);

        setStatus("success");
      } catch (error) {
        console.error(
          "Payment verification error:",
          error
        );

        setStatus("failed");

        setMessage(
          error instanceof Error
            ? error.message
            : "Unable to verify your payment."
        );
      }
    };

    verifyPayment();
  }, [searchParams]);

  /*
   * VERIFYING
   */

  if (status === "checking") {
    return (
      <main className="success-page">
        <header className="success-header">
          <div className="success-header-inner">
            <Link
              href="/"
              className="brand"
            >
              <span className="logo-mark">
                N
              </span>

              <span>NAPSPEN</span>
            </Link>
          </div>
        </header>

        <section className="success-section">
          <div className="success-container">
            <div className="success-icon">
              ...
            </div>

            <p className="success-label">
              VERIFYING PAYMENT
            </p>

            <h1>Please wait.</h1>

            <p className="success-description">
              We're confirming your payment
              with Flutterwave.
            </p>
          </div>
        </section>

        <footer className="success-footer">
          <p>
            © {new Date().getFullYear()}{" "}
            Napspen Solutions. All rights
            reserved.
          </p>
        </footer>
      </main>
    );
  }

  /*
   * FAILED
   */

  if (status === "failed") {
    return (
      <main className="success-page">
        <header className="success-header">
          <div className="success-header-inner">
            <Link
              href="/"
              className="brand"
            >
              <span className="logo-mark">
                N
              </span>

              <span>NAPSPEN</span>
            </Link>

            <Link
              href="/checkout"
              className="back-link"
            >
              Back to Checkout
            </Link>
          </div>
        </header>

        <section className="success-section">
          <div className="success-container">
            <div
              className="success-icon failed-icon"
            >
              !
            </div>

            <p className="success-label">
              PAYMENT NOT CONFIRMED
            </p>

            <h1>
              We couldn't confirm your payment.
            </h1>

            <p className="success-description">
              {message ||
                "Your payment was not successfully verified."}
            </p>

            <Link
              href="/checkout"
              className="home-button"
            >
              Return to Checkout

              <span>→</span>
            </Link>
          </div>
        </section>

        <footer className="success-footer">
          <p>
            © {new Date().getFullYear()}{" "}
            Napspen Solutions. All rights
            reserved.
          </p>
        </footer>
      </main>
    );
  }

  /*
   * SUCCESS
   */

  const amount =
    Number(transaction?.amount) || 9.99;

  const currency =
    transaction?.currency || "USD";

  const formattedAmount =
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);

  return (
    <main className="success-page">
      <header className="success-header">
        <div className="success-header-inner">
          <Link
            href="/"
            className="brand"
          >
            <span className="logo-mark">
              N
            </span>

            <span>NAPSPEN</span>
          </Link>

          <Link
            href="/"
            className="back-link"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <section className="success-section">
        <div className="success-container">
          <div className="success-icon">
            ✓
          </div>

          <p className="success-label">
            PAYMENT SUCCESSFUL
          </p>

          <h1>You're all set.</h1>

          <p className="success-description">
            Your payment has been successfully
            processed. Your guide is now ready
            for you.
          </p>

          <div className="success-card">
            {/* GUIDE COVER */}
            <div className="guide-cover">
              <div className="guide-cover-inner">
                <span className="cover-brand">
                  NAPSPEN SOLUTIONS
                </span>

                <div className="cover-content">
                  <small>
                    THE PRACTICAL GUIDE TO
                  </small>

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

                <span className="cover-author">
                  BY NAPSPEN
                </span>
              </div>
            </div>

            {/* GUIDE DETAILS */}
            <div className="guide-details">
              <span className="product-label">
                DIGITAL GUIDE
              </span>

              <h2>
                The Practical Retirement Guide
              </h2>

              <p>
                A practical guide to
                understanding the modern
                retirement landscape, avoiding
                common mistakes, and making
                better-informed retirement
                decisions.
              </p>

              {/* PURCHASE INFO */}
              <div className="purchase-info">
                <div>
                  <span>
                    Purchase status
                  </span>

                  <strong className="paid-status">
                    Paid
                  </strong>
                </div>

                <div>
                  <span>
                    Amount paid
                  </span>

                  <strong>
                    {formattedAmount}
                  </strong>
                </div>
              </div>

              {/* DOWNLOAD */}
              <a
                href="/guide/practical-retirement-guide.pdf"
                className="download-button"
                download="The-Practical-Retirement-Guide.pdf"
              >
                Download Your Guide

                <span>↓</span>
              </a>

              <p className="access-note">
                Your payment has been verified.
                Download your guide and keep it
                somewhere safe.
              </p>
            </div>
          </div>

          {/* NEXT STEPS */}
          <div className="next-steps">
            <p className="next-label">
              WHAT'S NEXT?
            </p>

            <h2>
              Start building a clearer
              retirement plan.
            </h2>

            <p>
              Read through the guide at your
              own pace and use the practical
              framework to start making better
              retirement decisions.
            </p>

            <Link
              href="/"
              className="home-button"
            >
              Return to Napspen

              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="success-footer">
        <p>
          © {new Date().getFullYear()}{" "}
          Napspen Solutions. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}

/*
 * PAGE
 *
 * Next.js requires a Suspense boundary around
 * components that use useSearchParams().
 */

export default function PaymentCallbackPage() {
  return (
    <Suspense
      fallback={
        <main className="success-page">
          <header className="success-header">
            <div className="success-header-inner">
              <Link
                href="/"
                className="brand"
              >
                <span className="logo-mark">
                  N
                </span>

                <span>NAPSPEN</span>
              </Link>
            </div>
          </header>

          <section className="success-section">
            <div className="success-container">
              <div className="success-icon">
                ...
              </div>

              <p className="success-label">
                VERIFYING PAYMENT
              </p>

              <h1>Please wait.</h1>

              <p className="success-description">
                We're confirming your payment
                with Flutterwave.
              </p>
            </div>
          </section>

          <footer className="success-footer">
            <p>
              © {new Date().getFullYear()}{" "}
              Napspen Solutions. All rights
              reserved.
            </p>
          </footer>
        </main>
      }
    >
      <PaymentCallbackContent />
    </Suspense>
  );
}
