/** @jsxImportSource @emotion/react */

import { titleWrapper } from '../../styles';

// eslint-disable-next-line react/destructuring-assignment
const Title = (content) => <p css={titleWrapper}>{content.children}</p>;

export default Title;
