import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale)) {
    return { messages: {}, locale }; // Prevent errors instead of redirecting
  }

  try {
    const messages = (await import(`./messages/${locale}.json`)).default;
    return { messages, locale };
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}`, error);
    return notFound();
  }
});
