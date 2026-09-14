export function SkeletonLoader() {
  return (
    <div className="space-y-4">
      <div className="skeleton h-8 w-3/4" />
      <div className="skeleton h-4 w-full" />
      <div className="skeleton h-4 w-5/6" />
      <div className="skeleton mt-6 h-64 w-full" />
      <div className="grid grid-cols-2 gap-4">
        <div className="skeleton h-32" />
        <div className="skeleton h-32" />
      </div>
    </div>
  );
}
