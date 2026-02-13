export function Card({
  title,
  children,
  className,
  onClick,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`"bg-white rounded-xl border border-gray-300 p-5 ${className}`}
    >
      {title && <h3 className="font-semibold mb-3">{title}</h3>}
      {children}
    </div>
  );
}
