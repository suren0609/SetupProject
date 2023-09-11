export function calculatePopupPosition(top: number, left: number) {
  if (window.innerHeight <= 650) {
    return { top: 0, left: left + 50 };
  } else if (top + 650 > window.innerHeight) {
    return {
      top: top - (top + 650 - window.innerHeight),
      left: left + 50,
    };
  } else {
    return { top: top - 50, left: left + 50 };
  }
}
