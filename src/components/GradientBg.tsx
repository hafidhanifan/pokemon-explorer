interface GradientBgProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GradientBg({
  className = "",
  children,
}: GradientBgProps) {
  return (
    <div
      className={`relative bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url('/images/gradient-bg.png')`,
      }}
    >
      {/* konten */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
