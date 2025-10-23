import { Metadata } from "next";

type GenerateMetadataProps = {
  title?: string;
  description?: string;
  path?: string;
  icon?: string;
  image?: string;
};

const BASE_URL = "https://www.woverasolutions.com";

/**
 * Generate SEO metadata including canonical URLs for any page
 */
export function generateMetadata({
  title = "Wovera Solutions PLC",
  description = "We make products that just work",
  path = "",
  icon = "/svg/wovera-icon.svg",
  image = "/images/open-graph.png",
}: GenerateMetadataProps = {}): Metadata {
  // Ensure path starts with a slash if not empty and doesn't have trailing slash
  const normalizedPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const absoluteCanonical = `${BASE_URL}${normalizedPath || "/"}`;
  const absoluteOgImage = image.startsWith("http")
    ? image
    : `${BASE_URL}${image}`;
  const absoluteIcon = icon.startsWith("http") ? icon : `${BASE_URL}${icon}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: absoluteCanonical,
    },
    openGraph: {
      type: "website",
      url: absoluteCanonical,
      siteName: "Wovera Solutions PLC",
      title,
      description,
      images: [
        {
          url: absoluteOgImage,
          alt: "Wovera Solutions PLC — We make products that just work",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteOgImage],
    },
    icons: {
      icon: [
        { url: absoluteIcon },
        {
          url: `${BASE_URL}/wovera-icon.ico`,
          type: "image/x-icon",
          sizes: "any",
        },
        { url: `${BASE_URL}/svg/wovera-icon.svg`, type: "image/svg+xml" },
      ],
      apple: `${BASE_URL}/svg/wovera-icon.svg`,
    },
  };
}
