import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const s3Domain = process.env.S3_DOMAIN;
const strapiDomain = process.env.STRAPI_DOMAIN;

const hostnames = [];

if (!!s3Domain) {
  hostnames.push({
    hostname: s3Domain,
  });
}

if (!!strapiDomain) {
  hostnames.push({
    hostname: strapiDomain,
  });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      ...hostnames,
    ],
  },
};

export default withNextIntl(nextConfig);
