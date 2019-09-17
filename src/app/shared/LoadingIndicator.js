/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

function LoadingIndicator() {
  const spinner = css`
    margin: 50px auto;
    width: 80px;
    height: 40px;
    text-align: center;
    font-size: 10px;
  `;

  const scale = keyframes`
    0%, 40%, 100% {
      transform: scaleY(0.4);
    }  
    20% {
      transform: scaleY(1.0);
    }
  `;

  const rectangle = css`
    background-color: #333;
    height: 100%;
    width: 6px;
    margin: 0 2px;
    display: inline-block;

    animation: ${scale} 1.2s infinite ease-in-out;
  `;

  const rect2 = css`
    animation-delay: -1.1s;
  `;

  const rect3 = css`
    animation-delay: -1.0s;
  `;

  const rect4 = css`
    animation-delay: -0.9s;
  `;

  const rect5 = css`
    animation-delay: -0.8s;
  `;

  return (
    <div css={spinner}>
      <div css={[rectangle]}></div>
      <div css={[rectangle, rect2]}></div>
      <div css={[rectangle, rect3]}></div>
      <div css={[rectangle, rect4]}></div>
      <div css={[rectangle, rect5]}></div>
    </div> 
  )
}

export default LoadingIndicator;
