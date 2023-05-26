import { css, type Theme } from '@emotion/react';

// NOTE : 공통적으로 여러번 사용됨
export const fixedBottomCss = (theme: Theme) => css`
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 0 16px;
`;