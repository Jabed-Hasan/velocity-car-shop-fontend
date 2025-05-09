const CarCardSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm bg-white dark:bg-gray-800">
      <div className="h-40 w-full rounded-lg bg-gray-300 dark:bg-gray-600" />
      <div className="h-4 w-3/4 rounded bg-gray-300 dark:bg-gray-600" />
      <div className="h-4 w-1/2 rounded bg-gray-300 dark:bg-gray-600" />
      <div className="h-4 w-1/3 rounded bg-gray-300 dark:bg-gray-600" />
    </div>
  );
};

export default CarCardSkeleton;
