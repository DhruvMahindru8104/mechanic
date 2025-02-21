export default function robots(){
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://mechanic-met8wxvmz-dhruv-mahindrus-projects.vercel.app/sitemap.xml', // Change this to your actual domain
  };
}
