import React from "react";
import Link from "next/link";


const Header: React.FC = () => {
return (
<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center py-4">
<div className="flex items-center gap-4">
<Link href="/">
<a className="text-2xl font-bold">ALX<span className="text-indigo-600">Listing</span></a>
</Link>
<nav className="hidden md:flex gap-3 text-sm text-gray-600">
<a className="hover:text-gray-900">Rooms</a>
<a className="hover:text-gray-900">Villas</a>
<a className="hover:text-gray-900">Countryside</a>
<a className="hover:text-gray-900">Ski</a>
</nav>
</div>


<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center border rounded-lg px-3 py-2 gap-2 w-72">
<input
aria-label="Search properties"
placeholder="Search locations, properties..."
className="outline-none w-full text-sm"
/>
<button className="text-sm font-medium">Search</button>
</div>


<div className="flex items-center gap-2">
<button className="text-sm px-3 py-1">Sign in</button>
<button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">Sign up</button>
</div>
</div>
</div>
</div>
</header>
);
};


export default Header;