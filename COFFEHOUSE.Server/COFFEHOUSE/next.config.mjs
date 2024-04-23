/** @type {import('next').NextConfig} */

const rewrites = () => {
    return [
        {
            source: "/api/:path*",
            destination: "http://localhost:5000/api/:path*",
        },
    ];
};

const nextConfig = {

    images: {
        loader: 'akamai',
        path: '/',
    },
    rewrites,
}


export default nextConfig;
