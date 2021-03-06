// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Logo from '../Logo';
import Paragraph from '../Paragraph';
import ExternalLink from '../ExternalLink';
import Swimming from '../Swimming/Swimming';
import AlgoliaLogo from './AlgoliaLogo';

type Props = {};

class AddDependencyInitialScreen extends Component<Props> {
  render() {
    return (
      <EmptyState>
        <Swimming>
          <Logo grayscale size="large" />
        </Swimming>
        <Paragraph>
          You can use the input above to search the Node Package Manager (NPM)
          registry for packages that have been published.
        </Paragraph>
        <Paragraph>
          Search by package name, description, keyword, or author.
        </Paragraph>
        <PoweredByWrapper>
          <ExternalLink href="https://www.algolia.com/?utm_source=guppy&amp;utm_medium=website&amp;utm_content=localhost&amp;utm_campaign=poweredby">
            <LinkText>
              <AlgoliaLogo />
            </LinkText>
          </ExternalLink>
        </PoweredByWrapper>
      </EmptyState>
    );
  }
}

const EmptyState = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 100px 40px;
  text-align: center;
`;

const PoweredByWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 25px;
`;

const LinkText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${COLORS.gray[600]};
`;

export default AddDependencyInitialScreen;
