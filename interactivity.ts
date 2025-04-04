/**
 * Asynchronously waits for given number of seconds
 * @param seconds number of seconds to wait
 * @example wait(5); // waits 5 seconds
 */
export const wait = async (seconds: number) =>
  new Promise((_) => setTimeout(_, seconds * 1000));

/**
 * Smoothly scrolls to top of given element
 * @param element element to scroll to
 * @example smoothScroll(document.getElementById("jumbotron"));
 */
export const smoothScroll = (element: HTMLElement) => {
  window.scrollTo({
    behavior: "smooth",
    top: element.offsetTop,
  });
};

/**
 * Copies given text to user's clipboard
 * @param text text to copy
 * @example copyToClipboard("matt@bierman.io");
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy text to clipboard", text, err);
  }
};
