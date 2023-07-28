export const getParameters = (ref1: any, ref2: any) => {
  const { top, left } = ref1.current!.getBoundingClientRect();
  const { height, width } = ref2.current!.getBoundingClientRect();

  return { top, left, height, width };
};
