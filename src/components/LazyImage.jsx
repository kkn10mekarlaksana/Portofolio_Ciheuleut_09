import { useState } from "react";

export default function LazyImage({
  src,
  alt,
  className = "",
  eager = false,
  onLoad,
  onError,
}) {
  const [status, setStatus] = useState("loading");

  const handleLoad = (event) => {
    setStatus("loaded");
    onLoad?.(event);
  };

  const handleError = (event) => {
    setStatus("error");
    onError?.(event);
  };

  return (
    <div className={`lazy-image ${status !== "loaded" ? "is-loading" : ""} ${status === "error" ? "has-error" : ""}`}>
      {status === "loading" && <span className="image-skeleton" aria-hidden="true" />}
      <img
        className={className}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
