// Redesigned DashboardCard – Unique Look
import { SkeletonLoader } from "@/components/inputs/Loader";
import { getStatusBackgroundColor } from "@/helpers/strings.helper";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface DashboardCardProps {
  label: string;
  value: string | number;
  onActionClick?: MouseEventHandler<HTMLAnchorElement>;
  actionLabel?: string;
  isLoading?: boolean;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  label,
  value,
  onActionClick,
  actionLabel = "Explore",
  isLoading = false,
}) => {
  return (
    <article className="bg-[#fff0f3] border border-[#ffb4a2] rounded-lg px-5 py-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <header className="mb-3">
        <h3 className="text-[#9c6644] text-xs font-semibold tracking-wide uppercase">
          {label}
        </h3>
        <p className="text-[#3d405b] text-4xl font-bold mt-1">
          {isLoading ? (
            <SkeletonLoader className="w-full h-4" type="text" />
          ) : (
            value
          )}
        </p>
      </header>
      {onActionClick && (
        <Link
          to="#"
          onClick={onActionClick}
          className={`mt-4 inline-block ${getStatusBackgroundColor(
            label
          )} text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-200`}
        >
          {actionLabel}
        </Link>
      )}
    </article>
  );
};

export default DashboardCard;
