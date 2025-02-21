
export default function sitemap(){
  const baseUrl = 'https://mechanic-met8wxvmz-dhruv-mahindrus-projects.vercel.app/'; // Change this to your actual domain

  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/services`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
  ];
}
