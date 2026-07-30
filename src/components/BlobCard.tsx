interface BlobCardProps {
  bgImage: string; // path ke PNG shape
  className?: string;
  children?: React.ReactNode;
}

export default function BlobCard({
  bgImage,
  className = "",
  children,
}: BlobCardProps) {
  return (
    <div
      className={`relative bg-cover bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative z-10 p-6 h-full">{children}</div>
    </div>
  );
}
