import { useEffect } from "react";
import "./instagram.css"

export default function InstagramEmbed({ url }) {
  useEffect(() => {
    // Ajout du script Instagram si pas déjà présent
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Si le script existe déjà, on réinitialise les embeds
      window.instgrm.Embeds.process();
    }
  }, [url]); // relance si l'URL change

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        minWidth: "100px"
      }}
    ></blockquote>
  );
}