import React from "react";

const ReviewPage = async ({ params }) => {
  const { reviewId, id } = await params;

  return (
    <div>
      ReviewPage{reviewId} {id}
    </div>
  );
};

export default ReviewPage;
