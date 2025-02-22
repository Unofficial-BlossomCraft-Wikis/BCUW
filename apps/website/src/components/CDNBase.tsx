import React, { useState } from "react";

interface CDNProps {
  url: string;
  alt: string;
  copyurl?: string;
  copy?: boolean;
  divClassName?: string;
  imgClassName?: string;
}
export default function CDNBase({ url, alt, copyurl, copy = true, divClassName, imgClassName }: CDNProps) {
  const [copied, setCopied] = useState(false); // State to handle copied message
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out effect

  const img_url = url;
  const copy_url = copyurl ? copyurl : url;

  const handleRightClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault(); // Prevent default right-click menu
    if (copy) {
      navigator.clipboard
        .writeText(copy_url)
        .then(() => {
          setCopied(true); // Show the copied message
          console.log(`Copied to clipboard: ${copy_url}`);
          setTimeout(() => {
            setFadeOut(true); // Start fade-out after 2 seconds
            setTimeout(() => {
              setCopied(false); // Hide the copied message after fading out
              setFadeOut(false); // Reset fade-out state
            }, 500); // Wait for the fade-out duration
          }, 2000); // Display message for 2 seconds
        })
        .catch((err) => {
          console.error("Failed to copy the URL: ", err);
        });
    }
  };

  const messageStyle: React.CSSProperties = {
    position: "absolute",
    top: "-10px",
    right: "0",
    backgroundColor: "var(--cherry)",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    fontSize: "12px",
    transition: "opacity 0.5s ease", // Fade transition
    opacity: fadeOut ? 0 : 1, // Apply fade-out effect based on state
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }} className={divClassName}>
      <img src={img_url} alt={alt} onContextMenu={handleRightClick} className={imgClassName} loading="lazy" />
      {copied && <span style={messageStyle}>Copied URL!</span>}
    </div>
  );
}
