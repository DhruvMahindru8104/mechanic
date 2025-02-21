export default function robots(){
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://mechanic-three.vercel.app/sitemap.xml', // Change this to your actual domain
  };
}
