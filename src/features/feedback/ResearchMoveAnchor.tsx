import Image from 'next/image';
import Link from 'next/link';
import { css, type Theme, useTheme } from '@emotion/react';

import ChevronArrowRightIcon from '~/components/icons/ChevronArrowRightIcon';
import { BODY_1, HEAD_2_BOLD } from '~/styles/typo';

import files from '../../../public/images/files.png';

interface Props {
  newFeedbackNumber: number;
}

const ResearchMoveAnchor = ({ newFeedbackNumber }: Props) => {
  const theme = useTheme();

  // TODO: link 위치 조정 필요
  return (
    <Link href="/" type="button" css={[HEAD_2_BOLD, containerCss]}>
      <section css={leftBoxCss(theme)}>
        <article>
          <div css={textWrapperCss(theme)}>
            <span>쌓인 연구 일지 보러가기</span>
            <ChevronArrowRightIcon css={chevronArrowRightIconCss} />
          </div>
          <div css={[BODY_1, unreadMsgCountBadge(theme)]}>+{newFeedbackNumber}</div>
        </article>
        {/* TODO: 이미지는 3D 작업 완료 되면 변경 예정 */}
        <Image css={fileImageCss} src={files} alt="파일 이미지" width={93} height={70} />
      </section>
      <aside css={rightMarkCss(theme)}></aside>
    </Link>
  );
};

export default ResearchMoveAnchor;

const containerCss = () => css`
  all: unset;

  display: flex;
  flex-direction: row;

  width: 360px;
  height: 120px;

  box-shadow: 3px 1px 18px -2px #b0b7ca59;
`;

const leftBoxCss = (theme: Theme) => css`
  display: flex;
  flex-direction: row;

  width: 350px;
  height: 118px;

  background-color: ${theme.colors.white};
`;

const textWrapperCss = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 24px auto auto 38px;

  color: ${theme.colors.gray_500};
`;

const chevronArrowRightIconCss = css`
  margin-left: 11px;
`;

const unreadMsgCountBadge = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 33px;
  height: 24px;
  margin: 11px auto auto 38px;

  color: ${theme.colors.gray_50};

  background-color: ${theme.colors.red};
  border-radius: 24px;
`;

const fileImageCss = css`
  margin: 50px 22px auto auto;
`;

const rightMarkCss = (theme: Theme) => css`
  width: 10px;
  height: 118px;
  background-color: ${theme.colors.secondary_200};
  border-radius: 0 8px 8px 0;
`;