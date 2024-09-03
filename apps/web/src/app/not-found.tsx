const NotFoundPage = () => {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-orange-300">
          <h1 className="text-4xl font-bold text-orange-900 mb-4">Page Not Found</h1>
          <p className="text-lg text-orange-800 mb-8">The page you are looking for does not exist.</p>
          <a
          href="/"
          className="px-4 py-2 bg-orange-700 text-orange-300 rounded-lg hover:bg-text transition">Go Back Home</a>
      </div>
    )
  }
  
  export default NotFoundPage