import { NextRequest, NextResponse } from "next/server";

const GUIDE_TITLE = "The Practical Retirement Guide";

// ============================================
// NAPSPEN USD PRICING
// ============================================

const GUIDE_PRICE = 9.99;
const GUIDE_OLD_PRICE = 14.99;
const GUIDE_CURRENCY = "USD";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();

    // ============================================
    // VALIDATE CUSTOMER INFORMATION
    // ============================================

    if (!name || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and email are required.",
        },
        { status: 400 }
      );
    }

    // ============================================
    // GET FLUTTERWAVE SECRET KEY
    // ============================================

    const secretKey = process.env.FLW_SECRET_KEY;

    if (!secretKey) {
      console.error("FLW_SECRET_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Flutterwave secret key is not configured.",
        },
        { status: 500 }
      );
    }

    // ============================================
    // SITE URL
    // ============================================

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    // ============================================
    // GENERATE UNIQUE TRANSACTION REFERENCE
    // ============================================

    const txRef = `NAPSPEN-${Date.now()}-${crypto.randomUUID()}`;

    // ============================================
    // DETECT COUNTRY
    // ============================================
    //
    // This is only stored as metadata for now.
    //
    // The actual payment currency is intentionally
    // fixed to USD on the server.
    //

    const country =
      request.headers
        .get("x-vercel-ip-country")
        ?.toUpperCase() || "UNKNOWN";

    // ============================================
    // INITIALIZE FLUTTERWAVE PAYMENT
    // ============================================

    const flutterwaveResponse = await fetch(
      "https://api.flutterwave.com/v3/payments",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          tx_ref: txRef,

          // IMPORTANT:
          // Server-controlled price
          amount: GUIDE_PRICE,

          // IMPORTANT:
          // Server-controlled currency
          currency: GUIDE_CURRENCY,

          redirect_url:
            `${siteUrl}/payment/callback`,

          customer: {
            name,
            email,
          },

          customizations: {
            title: "Napspen Solutions",
            description: GUIDE_TITLE,
            logo: `${siteUrl}/favicon.ico`,
          },

          meta: {
            product: GUIDE_TITLE,

            customer_name: name,

            customer_email: email,

            country,

            currency: GUIDE_CURRENCY,

            expected_amount: GUIDE_PRICE,

            old_price: GUIDE_OLD_PRICE,
          },

          configurations: {
            session_duration: 30,
            max_retry_attempt: 5,
          },
        }),
      }
    );

    // ============================================
    // READ FLUTTERWAVE RESPONSE
    // ============================================

    const data =
      await flutterwaveResponse.json();

    console.log(
      "Flutterwave initialize response:",
      data
    );

    // ============================================
    // HANDLE FLUTTERWAVE ERROR
    // ============================================

    if (!flutterwaveResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            data?.message ||
            "Flutterwave payment initialization failed.",
        },
        {
          status:
            flutterwaveResponse.status,
        }
      );
    }

    // ============================================
    // MAKE SURE PAYMENT LINK EXISTS
    // ============================================

    if (
      data?.status !== "success" ||
      !data?.data?.link
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Flutterwave did not return a payment link.",
        },
        { status: 500 }
      );
    }

    // ============================================
    // RETURN PAYMENT INFORMATION
    // ============================================

    return NextResponse.json({
      success: true,

      tx_ref: txRef,

      payment_url: data.data.link,

      amount: GUIDE_PRICE,

      currency: GUIDE_CURRENCY,
    });
  } catch (error) {
    console.error(
      "Flutterwave initialization error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while creating the payment.",
      },
      { status: 500 }
    );
  }
}