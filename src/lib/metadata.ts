import { Metadata } from "next";

type GenerateMetadataProps = {
  title?: string;
  description?: string;
  path?: string;
  icon?: string;
};

const BASE_URL = "https://www.woverasolutions.com";

/**
 * Generate SEO metadata including canonical URLs for any page
 */
export function generateMetadata({
  title = "Wovera Solutions PLC",
  description = "Building technology solutions that matter",
  path = "",
  icon = "/svg/wovera-icon.svg",
}: GenerateMetadataProps = {}): Metadata {
  // Ensure path starts with a slash if not empty and doesn't have trailing slash
  const normalizedPath = path 
    ? path.startsWith("/") ? path : `/${path}`
    : "";

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: normalizedPath || "/",
    },
    icons: {
      icon: [
        { url: icon },
        { url: "/wovera-icon.ico", type: "image/x-icon", sizes: "any" },
        { url: "/svg/wovera-icon.svg", type: "image/svg+xml" },
      ],
      apple: "/svg/wovera-icon.svg",
    },
  };
} 