interface RightCardProps {
  bgImage: string;
  className?: string;
  children?: React.ReactNode;
}

export default function RightCard({
  bgImage,
  className = "",
  children,
}: RightCardProps) {
  return (
    <div
      className={`relative bg-contain bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative z-10 p-6 h-full">{children}</div>
    </div>
  );
}
