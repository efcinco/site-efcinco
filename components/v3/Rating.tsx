import { Star } from "lucide-react";

type RatingProps = {
  value: number;
  max?: number;
  showValue?: boolean;
  count?: number;
  size?: number;
};

export function Rating({
  value,
  max = 5,
  showValue = false,
  count,
  size = 16,
}: RatingProps) {
  const filled = Math.round(value);
  const hasHalf = false;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }).map((_, index) => {
          if (index < filled) {
            return (
              <Star
                key={index}
                size={size}
                className="rating-star fill-current"
              />
            );
          }
          if (index === filled && hasHalf) {
            return (
              <div key={index} className="relative">
                <Star size={size} className="rating-star-empty" />
                <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                  <Star size={size} className="rating-star fill-current" />
                </div>
              </div>
            );
          }
          return <Star key={index} size={size} className="rating-star-empty" />;
        })}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-warm-gray">
          {value.toFixed(1)}
        </span>
      )}
      {count !== undefined && (
        <span className="text-sm text-warm-gray">({count})</span>
      )}
    </div>
  );
}
