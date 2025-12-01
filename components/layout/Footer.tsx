import React from "react";


const Footer: React.FC = () => {
return (
<footer className="bg-gray-50 border-t mt-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row justify-between items-start gap-6">
<div>
<h4 className="font-bold">ALX Listing</h4>
<p className="text-sm text-gray-600 mt-2">Find your favorite place — curated luxury stays worldwide.</p>
</div>


<div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
<div>
<h5 className="font-medium">Company</h5>
<ul className="mt-2">
<li>About</li>
<li>Careers</li>
<li>Press</li>
</ul>
</div>
<div>
<h5 className="font-medium">Support</h5>
<ul className="mt-2">
<li>Help Center</li>
<li>Contact</li>
<li>Privacy</li>
</ul>
</div>
</div>
</div>


<div className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} ALX Listing. All rights reserved.</div>
</div>
</footer>
);
};


export default Footer;