export const getPosition = (
  width: number,
  height: number,
  top: number,
  left: number,
) => {
  if (top + height > window.innerHeight) {
    if (left + width > window.innerWidth) {
      return {
        currentTop: -height,
        currentLeft: -width,
      };
    }

    return {
      currentTop: -height,
    };
  } else {
    if (left + width > window.innerWidth) {
      return {
        currentLeft: -width,
      };
    }
    return {
      currentTop: 30,
    };
  }
};
