import { Link } from "react-router-dom";

export const parseParagraph = (text, productMap) => {
  if (!text || !productMap) {
    console.log("No text or productMap provided:", { text, productMap });
    return text;
  }

  const words = text.split(/(\s+|[.,!?;:])/);

  return words.map((word, index) => {
    const trimmedWord = word.trim();
    if (!trimmedWord) return word; // Skip empty words

    // Normalize the word: lowercase, single spaces
    const normalizedWord = trimmedWord
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

    // Log for debugging
    console.log(`Word: "${trimmedWord}", Normalized: "${normalizedWord}", Product ID:`, productMap[normalizedWord]);

    // Match only "omniquan" (not the code after it)
    if (normalizedWord === "omniquan") {
      const productId = productMap["omniquan"];
      if (productId) {
        console.log(`Link Created - "${trimmedWord}" -> ID: ${productId}`);
        return (
          <Link
            key={index}
            to={`/available-stocks/${productId}`}
            className="font-bold hover:underline"
          >
            {word}
          </Link>
        );
      } else {
        console.log(`No Product ID for "omniquan" in productMap`);
      }
    }
    return word;
  });
};