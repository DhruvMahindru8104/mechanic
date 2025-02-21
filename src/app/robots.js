export default function robots(){
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://yourwebsite.com/sitemap.xml', // Change this to your actual domain
  };
}
