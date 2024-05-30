import React from "react";

function useDefaultStyle(defaultStyle, customStyle) {
  const [style, setStyle] = React.useState(defaultStyle);

  React.useCallback(() => customStyle && setStyle(customStyle), [customStyle]);

  return style;
}

export default useDefaultStyle;
