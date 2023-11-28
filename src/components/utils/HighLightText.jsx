export const HighLightText = ({ children, bold = "false" }) => {
  const colorTextLight = `font-light text-pink-600`;
  const colorTextBold = `font-bold text-pink-600`;
  return (
    <span className={bold === true ? `${colorTextBold}` : `${colorTextLight}`}>
      {children}
    </span>
  );
};
