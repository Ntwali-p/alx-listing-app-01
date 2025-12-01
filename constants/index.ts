# alx-listing-app-00 — Project scaffold

Below are the suggested files for the **Responsive Property Listing Page** using Next.js, TypeScript and Tailwind CSS. Paste them into your repository under the mentioned paths.

---

## `interfaces/index.ts`

```ts
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number; // per night
  offers: Offers;
  image: string;
  discount?: string; // percentage as string or empty
}
```

---

## `constants/index.ts`

```ts
import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image1.jpg",
    discount: "",
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://example.com/image2.jpg",
    discount: "30",
  },
  {
    name: "Cozy Desert Retreat",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://example.com/image3.jpg",
    discount: "",
  },
  {
    name: "City Lights Penthouse",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://example.com/image4.jpg",
    discount: "15",
  },
  {
    name: "Riverside Cabin",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "https://example.com/image5.jpg",
    discount: "20",
  },
  {
    name: "Modern Beachfront Villa",
    address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "https://example.com/image6.jpg",
    discount: "",
  },
  {
    name: "Lakeside Chalet",
    address: { state: "Banff", city: "Alberta", country: "Canada" },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://example.com/image7.jpg",
    discount: "10",
  },
  {
    name: "Tropical Garden Villa",
    address: { state: "Koh Samui", city: "Surat Thani", country: "Thailand" },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: { bed: "3", shower: "3", occupants: "5-6" },
    image: "https://example.com/image8.jpg",
    discount: "25",
  },
  {
    name: "Urban Loft",
    address: { state: "Berlin", city: "Berlin", country: "Germany" },
    rating: 4.6,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://example.com/image9.jpg",
    discount: "",
  },
  {
    name: "Secluded Forest Cabin",
    address: { state: "Whistler", city: "British Columbia", country: "Canada" },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://example.com/image10.jpg",
    discount: "40",
  },
  {
    name: "Cliffside Villa",
    address: { state: "Amalfi", city: "Salerno", country: "Italy" },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "https://example.com/image11.jpg",
    discount: "50",
  },
  {
    name: "Coastal Escape Villa",
    address: { state: "Noosa", city: "Queensland", country: "Australia" },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image12.jpg",
    discount: "",
  },
  {
    name: "Historical Villa",
    address: { state: "Florence", city: "Tuscany", country: "Italy" },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://example.com/image13.jpg",
    discount: "35",
  },
  {
    name: "Downtown Apartment",
    address: { state: "Tokyo", city: "Tokyo", country: "Japan" },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: { bed: "1", shower: "1", occupants: "2" },
    image: "https://example.com/image14.jpg",
    discount: "",
  },
  {
    name: "Luxury Safari Lodge",
    address: { state: "Serengeti", city: "Mara", country: "Tanzania" },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "https://example.com/image15.jpg",
    discount: "20",
  },
  {
    name: "Countryside Cottage",
    address: { state: "Cotswolds", city: "Gloucestershire", country: "UK" },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "2", shower: "1", occupants: "2-4" },
    image: "https://example.com/image16.jpg",
    discount: "25",
  },
  {
    name: "Riverfront Mansion",
    address: { state: "Paris", city: "Île-de-France", country: "France" },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: { bed: "4", shower: "3", occupants: "6-8" },
    image: "https://example.com/image17.jpg",
    discount: "30",
  },
  {
    name: "Ski Chalet",
    address: { state: "Zermatt", city: "Valais", country: "Switzerland" },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://example.com/image18.jpg",
    discount: "",
  },
  {
    name: "Island Paradise Villa",
    address: { state: "Mahe", city: "Victoria", country: "Seychelles" },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: { bed: "5", shower: "5", occupants: "8-10" },
    image: "https://example.com/image19.jpg",
    discount: "60",
  },
  {
    name: "Clifftop Retreat",
    address: { state: "Cape Town", city: "Western Cape", country: "South Africa" },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://example.com/image20.jpg",
    discount: "",
  },
];

export const HERO_IMAGE = "/images/hero.jpg"; // add an actual image in public/images/hero.jpg
```

---

## `components/layout/Header.tsx`

```tsx
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
```

---

## `components/layout/Footer.tsx`

```tsx
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
```

---

## `components/layout/Layout.tsx`

```tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
```

---

## `components/ui/Pill.tsx`

```tsx
import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full border text-sm whitespace-nowrap ${
        active ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
```

---

## `components/property/PropertyCard.tsx`

```tsx
import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
      <div className="relative h-44 sm:h-56 bg-gray-100">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {property.discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">-{property.discount}%</span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">{property.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{property.address.city}, {property.address.country}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-700">${property.price.toLocaleString()}</div>
            <div className="text-xs text-gray-500">per night</div>
          </div>
          <div className="text-right">
            <div className="font-medium">{property.rating.toFixed(2)}</div>
            <div className="text-xs text-gray-500">rating</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
```

---

## `pages/_app.tsx`

```tsx
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

---

## `pages/index.tsx`

```tsx
import React, { useMemo, useState } from "react";
import { PROPERTYLISTINGSAMPLE, HERO_IMAGE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/ui/Pill";
import PropertyCard from "@/components/property/PropertyCard";

const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Beachfront",
  "Pet Friendly",
  "Pool",
  "Private Pool",
  "Mountain View",
];

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeFilter) return PROPERTYLISTINGSAMPLE;
    const key = activeFilter.toLowerCase();
    return PROPERTYLISTINGSAMPLE.filter((p) =>
      p.category.some((c) => c.toLowerCase().includes(key) || p.name.toLowerCase().includes(key))
    );
  }, [activeFilter]);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-64 sm:h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="bg-black/40 w-full h-full absolute" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">Find your favorite place here!</h1>
          <p className="mt-3 text-white text-sm sm:text-lg">The best prices for over 2 million properties worldwide.</p>
          <div className="mt-6">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Explore</button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-6">
          <div className="flex gap-3 flex-wrap">
            <Pill label="All" active={!activeFilter} onClick={() => setActiveFilter(null)} />
            {FILTERS.map((f) => (
              <Pill key={f} label={f} active={activeFilter === f} onClick={() => setActiveFilter(f)} />
            ))}
          </div>
        </div>

        {/* Listings grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p: PropertyProps, idx) => (
              <PropertyCard key={p.name + idx} property={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center text-gray-600 py-12">No properties matched your filter.</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
```

---

## `styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #__next {
  height: 100%;
}
```

---

## Notes / Next steps

* Add a real hero image to `public/images/hero.jpg` and replace `HERO_IMAGE` path if you prefer a remote URL.
* Replace the placeholder `example.com` images with optimized assets or `next/image` if you adapt further.
* Consider converting `img` to `next/image` for optimization, but you will need to add domains to `next.config.js` if you use external images.
* Add unit tests or Storybook components for the UI pieces if desired.

---

If you'd like, I can also generate the full `PROPERTYLISTINGSAMPLE` array (all 20 items) in the constants file in this canvas — I left it truncated above for readability. Let me know and I'll add the full array in the document.
