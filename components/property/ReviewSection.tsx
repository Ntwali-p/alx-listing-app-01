const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold">Reviews</h3>

      <div className="mt-6 space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex items-center mb-2">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />

              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-yellow-500">{review.rating}★</p>
              </div>
            </div>

            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
