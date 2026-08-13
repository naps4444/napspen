import { NextRequest, NextResponse } from "next/server";

// ============================================
// NAPSPEN PAYMENT SETTINGS
// ============================================

const GUIDE_PRICE = 9.99;
const GUIDE_CURRENCY = "USD";

export async function GET(
  request: NextRequest
) {
  try {
    // ============================================
    // GET QUERY PARAMETERS
    // ============================================

    const searchParams =
      request.nextUrl.searchParams;

    const transactionId =
      searchParams.get("transaction_id");

    const txRef =
      searchParams.get("tx_ref");

    // ============================================
    // VALIDATE TRANSACTION ID
    // ============================================

    if (!transactionId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Missing transaction ID.",
        },
        { status: 400 }
      );
    }

    // ============================================
    // GET FLUTTERWAVE SECRET KEY
    // ============================================

    const secretKey =
      process.env.FLW_SECRET_KEY;

    if (!secretKey) {
      console.error(
        "FLW_SECRET_KEY is missing."
      );

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
    // VERIFY TRANSACTION WITH FLUTTERWAVE
    // ============================================

    const flutterwaveResponse =
      await fetch(
        `https://api.flutterwave.com/v3/transactions/${encodeURIComponent(
          transactionId
        )}/verify`,
        {
          method: "GET",

          headers: {
            Authorization:
              `Bearer ${secretKey}`,

            "Content-Type":
              "application/json",
          },

          cache: "no-store",
        }
      );

    // ============================================
    // READ FLUTTERWAVE RESPONSE
    // ============================================

    const data =
      await flutterwaveResponse.json();

    console.log(
      "Flutterwave verification response:",
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
            "Unable to verify transaction with Flutterwave.",
        },
        {
          status:
            flutterwaveResponse.status,
        }
      );
    }

    // ============================================
    // GET TRANSACTION
    // ============================================

    const transaction = data?.data;

    if (!transaction) {
      return NextResponse.json(
        {
          success: false,
          message:
            "No transaction information was returned.",
        },
        { status: 400 }
      );
    }

    // ============================================
    // 1. PAYMENT MUST BE SUCCESSFUL
    // ============================================

    const isSuccessful =
      transaction.status === "successful";

    if (!isSuccessful) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Flutterwave reports that the payment was not successful.",
        },
        { status: 400 }
      );
    }

    // ============================================
    // 2. VERIFY CURRENCY
    // ============================================

    const actualCurrency =
      String(
        transaction.currency || ""
      ).toUpperCase();

    const currencyMatches =
      actualCurrency === GUIDE_CURRENCY;

    if (!currencyMatches) {
      console.error({
        expectedCurrency:
          GUIDE_CURRENCY,

        actualCurrency,
      });

      return NextResponse.json(
        {
          success: false,
          message:
            "Payment currency could not be verified.",
        },
        { status: 400 }
      );
    }

    // ============================================
    // 3. VERIFY PAYMENT AMOUNT
    // ============================================

    const actualAmount =
      Number(transaction.amount);

    const amountMatches =
      actualAmount === GUIDE_PRICE;

    if (!amountMatches) {
      console.error({
        expectedAmount:
          GUIDE_PRICE,

        actualAmount,

        currency:
          actualCurrency,
      });

      return NextResponse.json(
        {
          success: false,
          message:
            "Payment amount could not be verified.",
        },
        { status: 400 }
      );
    }

    // ============================================
    // 4. VERIFY TRANSACTION REFERENCE
    // ============================================

    const flutterwaveTxRef =
      transaction.tx_ref;

    const referenceMatches =
      Boolean(txRef) &&
      Boolean(flutterwaveTxRef) &&
      flutterwaveTxRef === txRef;

    if (!referenceMatches) {
      console.error({
        expectedTxRef:
          txRef,

        actualTxRef:
          flutterwaveTxRef,
      });

      return NextResponse.json(
        {
          success: false,
          message:
            "Payment reference could not be verified.",
        },
        { status: 400 }
      );
    }

    // ============================================
    // 5. PAYMENT IS FULLY VERIFIED
    // ============================================

    console.log(
      "NAPSPEN PAYMENT VERIFIED:",
      {
        transactionId:
          transaction.id,

        txRef:
          transaction.tx_ref,

        amount:
          actualAmount,

        currency:
          actualCurrency,

        status:
          transaction.status,

        customer:
          transaction.customer,
      }
    );

    // ============================================
    // RETURN SUCCESS
    // ============================================

    return NextResponse.json({
      success: true,

      message:
        "Payment verified successfully.",

      transaction: {
        id:
          transaction.id,

        tx_ref:
          transaction.tx_ref,

        amount:
          actualAmount,

        currency:
          actualCurrency,

        status:
          transaction.status,

        customer: {
          email:
            transaction.customer?.email,

          name:
            transaction.customer?.name,
        },
      },
    });
  } catch (error) {
    console.error(
      "Flutterwave verification error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while verifying the payment.",
      },
      { status: 500 }
    );
  }
}