import React from 'react';
import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { foreground, red, lightGrey } from '../utils/colors';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

// const StyledProvider = styled(LiveProvider)`
//   border-radius: ${polished.rem(3)};
//   box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
//   overflow: hidden;
//   margin-bottom: ${polished.rem(100)};
// `;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: ${lightGrey};
  caret-color: red;
  font-family: 'Source Code Pro', monospace;
  font-size: ${polished.rem(14)};
  height: ${polished.rem(350)};
  max-height: ${polished.rem(350)};
  overflow: auto;
  ${column};
  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  border: 1px solid black ${column};
`;

// eslint-disable-next-line
const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
`;

const LiveEdit = ({ noInline, code }) => (
  <LiveProvider code={code} noInline={noInline}>
    <LiveWrapper>
      <StyledEditor>
        <LiveEditor />
      </StyledEditor>
      <StyledPreview />
    </LiveWrapper>

    {/* <StyledError /> */}
  </LiveProvider>
);

export default LiveEdit;
