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

export const getTemplatePos = (
  width: number,
  height: number,
  top: number,
  left: number,
) => {
  if (top + height > window.innerHeight - 50) {
    if (left + width > window.innerWidth) {
      return {
        currentTop: top - height,
        currentLeft: left - width,
      };
    } else {
      return {
        currentLeft: left,
        currentTop: top - height,
      };
    }
  } else {
    if (left + width > window.innerWidth) {
      return {
        currentTop: top,
        currentLeft: left - width,
      };
    } else {
      return {
        currentTop: top + 30,
        currentLeft: left,
      };
    }
  }
};
