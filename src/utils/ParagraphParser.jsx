// src/utils/parseParagraph.js
import { Link } from "react-router-dom";

export const parseParagraph = (text, productMap) => {
  if (!text || !productMap) return text;

  // Split text into words, preserving spaces and punctuation
  const words = text.split(/(\s+|[.,!?;:])/);

  return words.map((word, index) => {
    const trimmedWord = word.trim();
    if (productMap[trimmedWord]) {
      return (
        <Link
          key={index}
          to={`/available-stocks/${productMap[trimmedWord]}`}
          className="font-bold text-blue-600 hover:underline dark:text-blue-400"
        >
          {word}
        </Link>
      );
    }
    return word;
  });
};