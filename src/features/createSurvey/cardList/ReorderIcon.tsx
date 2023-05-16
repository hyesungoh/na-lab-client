import { type DragControls } from 'framer-motion';

interface Props {
  dragControls: DragControls;
}

function ReorderIcon({ dragControls }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onPointerDown={(event) => dragControls.start(event)}
      style={{ cursor: 'grab' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.11797 6.20078H20.118C20.4362 6.20078 20.7415 6.07435 20.9665 5.84931C21.1915 5.62427 21.318 5.31904 21.318 5.00078C21.318 4.68252 21.1915 4.3773 20.9665 4.15225C20.7415 3.92721 20.4362 3.80078 20.118 3.80078H4.11797C3.79971 3.80078 3.49448 3.92721 3.26944 4.15225C3.0444 4.3773 2.91797 4.68252 2.91797 5.00078C2.91797 5.31904 3.0444 5.62427 3.26944 5.84931C3.49448 6.07435 3.79971 6.20078 4.11797 6.20078ZM20.118 10.8008H4.11797C3.79971 10.8008 3.49448 10.9272 3.26944 11.1523C3.0444 11.3773 2.91797 11.6825 2.91797 12.0008C2.91797 12.319 3.0444 12.6243 3.26944 12.8493C3.49448 13.0744 3.79971 13.2008 4.11797 13.2008H20.118C20.4362 13.2008 20.7415 13.0744 20.9665 12.8493C21.1915 12.6243 21.318 12.319 21.318 12.0008C21.318 11.6825 21.1915 11.3773 20.9665 11.1523C20.7415 10.9272 20.4362 10.8008 20.118 10.8008ZM20.118 17.8008H4.11797C3.96038 17.8008 3.80434 17.8318 3.65875 17.8921C3.51316 17.9524 3.38087 18.0408 3.26944 18.1523C3.15801 18.2637 3.06962 18.396 3.00931 18.5416C2.94901 18.6872 2.91797 18.8432 2.91797 19.0008C2.91797 19.1584 2.94901 19.3144 3.00931 19.46C3.06962 19.6056 3.15801 19.7379 3.26944 19.8493C3.38087 19.9607 3.51316 20.0491 3.65875 20.1094C3.80434 20.1697 3.96038 20.2008 4.11797 20.2008H20.118C20.2756 20.2008 20.4316 20.1697 20.5772 20.1094C20.7228 20.0491 20.8551 19.9607 20.9665 19.8493C21.0779 19.7379 21.1663 19.6056 21.2266 19.46C21.2869 19.3144 21.318 19.1584 21.318 19.0008C21.318 18.8432 21.2869 18.6872 21.2266 18.5416C21.1663 18.396 21.0779 18.2637 20.9665 18.1523C20.8551 18.0408 20.7228 17.9524 20.5772 17.8921C20.4316 17.8318 20.2756 17.8008 20.118 17.8008Z"
        fill="#B0B0B0"
      />
    </svg>
  );
}

export default ReorderIcon;
