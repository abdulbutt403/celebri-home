import toast from "react-hot-toast";

export const isValidEmail = (email) => {
  // Regular expression for a basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const copyToClipboard = (text) => {
  // Create a temporary textarea element to hold the text
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Append the textarea to the document
  document.body.appendChild(textArea);

  // Select the text in the textarea
  textArea.select();

  try {
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    toast.success("Text copied to clipboard");
  } catch (err) {
    console.error("Unable to copy text to clipboard", err);
  } finally {
    // Remove the textarea from the document
    document.body.removeChild(textArea);
  }
};
