export function initializeClarity() {
  if (typeof window === "undefined") return;

  if (window.clarity) {
    return;
  }

  window.clarity = window.clarity || (() => {});
}
