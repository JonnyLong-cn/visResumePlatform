import React, { Fragment } from 'react';
import { Container } from './style';

interface IProps {
  text: string;
  styles?: React.CSSProperties;
}

function Title({ text, styles }: IProps) {
  return (
    <Fragment>
      <Container style={styles}>
        {text}
      </Container>
    </Fragment>
  );
}

export default Title;