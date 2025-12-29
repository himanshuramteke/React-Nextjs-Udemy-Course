import React from "react";

const ProductPage = async ({ params }) => {
  const { id } = await params;
  return <div>ProductPage {id}</div>;
};

export default ProductPage;
