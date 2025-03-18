import { Link } from "react-router-dom";

export const parseParagraph = (text, productMap) => {
  if (!text || !productMap) {
    console.log("No text or productMap provided:", { text, productMap });
    return text;
  }

  console.log("Parsing text:", text);
  const words = text.split(/(\s+|[.,!?;:])/);
  console.log("Split words:", words);

  const result = [];
  let i = 0;

  while (i < words.length) {
    const trimmedWord = words[i].trim();
    console.log(`Processing word at index ${i}: "${trimmedWord}"`);

    if (!trimmedWord) {
      result.push(words[i]);
      i++;
      continue;
    }

    const normalizedWord = trimmedWord.toLowerCase().replace(/\s+/g, " ").trim();

    if (normalizedWord.startsWith("omniquan")) {
      let fullName = trimmedWord;
      let normalizedFullName = normalizedWord;
      let j = i + 1;

      while (j < words.length && j <= i + 3) {
        const nextWord = words[j].trim();
        console.log(`Checking next word at index ${j}: "${nextWord}"`);

        if (!nextWord) {
          j++;
          continue;
        }
        if (/[.,!?;:]/.test(nextWord)) {
          console.log(`Stopping at punctuation: "${nextWord}"`);
          break;
        }

        const nextNormalized = nextWord.toLowerCase().replace(/\s+/g, " ").trim();
        fullName += " " + nextWord;
        normalizedFullName += " " + nextNormalized;
        j++;

        if (productMap[normalizedFullName]) {
          console.log(`Valid product found: "${fullName}"`);
          break;
        }
      }

      console.log(`Full Name Built: "${fullName}", Normalized: "${normalizedFullName}", Product ID:`, productMap[normalizedFullName]);

      const productId = productMap[normalizedFullName];
      if (productId) {
        console.log(`Link Created - "${fullName}" -> ID: ${productId}`);
        result.push(
          <Link
            key={i}
            to={`/available-stocks/${productId}`}
            className="font-bold  hover:underline"
          >
            {fullName}
          </Link>
        );
        i = j;
      } else {
        console.log(`No Product ID for "${fullName}" - Adding as text`);
        result.push(fullName);
        i = j;
      }
    } else {
      result.push(words[i]);
      i++;
    }
  }

  console.log("Final parsed result:", result);
  return result;
};