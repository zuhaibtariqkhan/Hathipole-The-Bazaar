'use client';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'card' | 'text';
  width?: string;
  height?: string;
}

export default function SkeletonLoader({
  className = '',
  variant = 'rectangular',
  width,
  height
}: SkeletonLoaderProps) {
  if (variant === 'card') {
    return (
      <div className={`rounded-3xl overflow-hidden border border-white/10 p-4 space-y-4 animate-shimmer ${className}`}>
        <div className="w-full aspect-[4/5] rounded-2xl bg-white/5" />
        <div className="space-y-2">
          <div className="h-4 w-1/3 bg-white/10 rounded-full" />
          <div className="h-6 w-3/4 bg-white/15 rounded-lg" />
          <div className="h-4 w-1/2 bg-white/10 rounded-full" />
        </div>
      </div>
    );
  }

  if (variant === 'circular') {
    return (
      <div
        className={`rounded-full animate-shimmer ${className}`}
        style={{ width: width || '48px', height: height || '48px' }}
      />
    );
  }

  if (variant === 'text') {
    return (
      <div
        className={`h-4 rounded-full animate-shimmer ${className}`}
        style={{ width: width || '100%', height: height || '16px' }}
      />
    );
  }

  return (
    <div
      className={`rounded-2xl animate-shimmer ${className}`}
      style={{ width: width || '100%', height: height || '200px' }}
    />
  );
}
