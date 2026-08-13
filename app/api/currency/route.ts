import { NextRequest, NextResponse } from "next/server";

const CURRENCY_CONFIG: Record<
  string,
  {
    currency: string;
    locale: string;
    price: number;
    oldPrice: number;
  }
> = {
  NG: {
    currency: "NGN",
    locale: "en-NG",
    price: 9900,
    oldPrice: 15000,
  },

  US: {
    currency: "USD",
    locale: "en-US",
    price: 9.99,
    oldPrice: 14.99,
  },

  GB: {
    currency: "GBP",
    locale: "en-GB",
    price: 7.99,
    oldPrice: 11.99,
  },

  CA: {
    currency: "CAD",
    locale: "en-CA",
    price: 13.99,
    oldPrice: 19.99,
  },

  AU: {
    currency: "AUD",
    locale: "en-AU",
    price: 14.99,
    oldPrice: 21.99,
  },

  DE: {
    currency: "EUR",
    locale: "de-DE",
    price: 9.49,
    oldPrice: 14.49,
  },

  FR: {
    currency: "EUR",
    locale: "fr-FR",
    price: 9.49,
    oldPrice: 14.49,
  },

  IT: {
    currency: "EUR",
    locale: "it-IT",
    price: 9.49,
    oldPrice: 14.49,
  },

  ES: {
    currency: "EUR",
    locale: "es-ES",
    price: 9.49,
    oldPrice: 14.49,
  },
};

const DEFAULT_CONFIG = CURRENCY_CONFIG.NG;

export async function GET(request: NextRequest) {
  try {
    /*
     * Vercel provides this header automatically
     * when the application is deployed.
     */
    const country =
      request.headers.get("x-vercel-ip-country")?.toUpperCase() || "NG";

    const config =
      CURRENCY_CONFIG[country] || DEFAULT_CONFIG;

    return NextResponse.json({
      success: true,
      country,
      currency: config.currency,
      locale: config.locale,
      price: config.price,
      oldPrice: config.oldPrice,
    });
  } catch (error) {
    console.error("Currency detection error:", error);

    return NextResponse.json({
      success: true,
      country: "NG",
      currency: "NGN",
      locale: "en-NG",
      price: 9900,
      oldPrice: 15000,
    });
  }
}