function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400"></div>
      <p className="ml-4 text-lg text-gray-600">Loading...</p>
    </div>
  );
}

export default Loading;
