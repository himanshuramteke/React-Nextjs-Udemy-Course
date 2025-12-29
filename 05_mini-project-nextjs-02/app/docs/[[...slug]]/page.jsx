const docsSlug = async ({ params }) => {
  const { slug } = await params;
  return <div>docsSlug {slug.join('/')}</div>;
};

export default docsSlug;
