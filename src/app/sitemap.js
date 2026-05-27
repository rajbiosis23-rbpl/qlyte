export default async function sitemap() {

 const districts = [
  "jaipur",
  "delhi",
  "mumbai"
 ];

 return districts.map((district) => ({
  url:
   `https://qlyte.com/${district}`,
  lastModified: new Date(),
 }));
}