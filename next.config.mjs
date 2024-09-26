// @ts-check
 
export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    env: {
      NEXT_API_URL: "https://private-8b820b-portfolio28.apiary-mock.com/",
      NEXT_PUBLIC_BEAM_TOKEN: "1e03a62e-6ca8-497f-ba72-f752aeec4db4"
    }
  }
  return nextConfig
}