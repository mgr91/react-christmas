import React from 'react';
import Page from '../components/page';
import ArticleList from '../components/article-list';
import WhatIsThis from '../components/what-is-this';
import ContentContainer from '../components/content-container';
import {
  PageTitle,
  LeadParagraph,
  LinkText,
  Paragraph,
} from '../components/typography';

const YearPage = props => {
  const { year } = props;
  const isWayInThePast = year < 2017;
  const isWayInTheFuture = year > 2018;
  const isValidYear = !isWayInThePast && !isWayInTheFuture;
  return (
    <Page title="react.christmas">
      <PageTitle centerText>Posts from {year}</PageTitle>
      {isWayInThePast && (
        <ContentContainer>
          <LeadParagraph>
            Woah there pilgrim! ✋ We only got started in 2017, so that's all
            the posts we have. 🤷‍
          </LeadParagraph>
          <Paragraph>
            If you want, you can go check out{' '}
            <LinkText href="/year?year=2017" as="/2017">
              2017
            </LinkText>{' '}
            if you want - it was a pretty cool year! 😎
          </Paragraph>
        </ContentContainer>
      )}
      {isWayInTheFuture && (
        <ContentContainer>
          <LeadParagraph>
            Hold your cyber monkes from space there compadre! 👽🐵 You can't
            visit the future! We haven't gotten that far yet. 😞
          </LeadParagraph>
          <Paragraph>
            If you want, you can check out the{' '}
            <LinkText href="/">front page</LinkText>, which will guide you to
            the content we do have available.
          </Paragraph>
        </ContentContainer>
      )}
      {isValidYear && <ArticleList year={props.year} />}

      <ContentContainer>
        <WhatIsThis />
      </ContentContainer>
    </Page>
  );
};

YearPage.getInitialProps = context => ({
  year: Number(context.query.year),
});

export default YearPage;