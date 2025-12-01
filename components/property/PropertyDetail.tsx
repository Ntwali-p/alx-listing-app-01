import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      {/* LEFT SECTION */}
      <div className="lg:col-span-2">
        {/* Title + Rating */}
        <h1 className="text-4xl font-bold">{property.name}</h1>

        <div className="flex items-center space-x-2 mt-2 text-gray-600">
          <span className="text-yellow-500 font-semibold">{property.rating}★</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-6">
          <img
            src={property.image}
            alt={property.name}
            className="col-span-4 lg:col-span-2 row-span-2 w-full h-full object-cover rounded-lg"
          />

          {property.images?.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-40 object-cover rounded-lg"
              alt="Property"
            />
          ))}
        </div>

        {/* Description Tabs */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {property.category.map((amenity, index) => (
              <span
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-sm"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <ReviewSection reviews={property.reviews} />
      </div>

      {/* RIGHT SECTION — Booking Box */}
      <div className="lg:col-span-1">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
