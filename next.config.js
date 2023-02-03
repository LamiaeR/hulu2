 /** @type {import('next').NextConfig} */
  const nextConfig = {
   reactStrictMode: true,
 }

 module.exports = nextConfig 
 
module.exports={
  images:{
    domains:["links.papareact.com","image.tmdb.org"]
  },
 env:{
  API_KEY: [process.env.API_KEY]
  
}
}
