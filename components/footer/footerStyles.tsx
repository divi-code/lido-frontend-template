import { Container, Divider } from '@lidofinance/lido-ui';
import styled from 'styled-components';

export const FooterStyle = styled(Container)`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 20px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 40px;
  }
`;

export const FooterDividerStyle = styled(Divider)`
  flex-basis: 100%;
  margin-bottom: 60px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 40px;
  }
`;

export const FooterLogoStyle = styled.div`
  flex-grow: 25%;
  flex-grow: 1;
  margin-bottom: 40px;
  box-sizing: border-box;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-basis: 100%;
    order: 2;
  }
`;

export const FooterGroupStyle = styled.div`
  flex-grow: 1;
  margin-bottom: 40px;
  padding-right: 20px;

  &:last-child {
    padding-right: 0;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-basis: 100%;
  }
`;

export const FooterTitleStyle = styled.h4`
  margin: 0.6em 0;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizesMap.lg}px;
  line-height: 1.3em;
  margin: 0 0 0.5em;
`;

export const FooterItemStyle = styled.div`
  font-size: ${({ theme }) => theme.fontSizesMap.md}px;
  line-height: 1.5em;
  margin: 0 0 0.5em;

  a {
    text-decoration: none;
    opacity: 0.7;

    &,
    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }

    &:hover {
      opacity: 1;
    }
  }
`;
