const NotFoundPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-secondary">
      <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-lg text-white mb-8">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-third transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFoundPage;
