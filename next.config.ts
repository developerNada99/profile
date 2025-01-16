import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // تجاهل أخطاء TypeScript أثناء البناء
  },
  /* يمكنك إضافة خيارات أخرى هنا */
};

export default nextConfig;
