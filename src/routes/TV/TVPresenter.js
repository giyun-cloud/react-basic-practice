import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "components/Section";
import Loader from "components/Loader";

const Container = styled.div`
  padding: 0 20px;
`;

function TVPresenter({ popular, topRated, airingToday, error, loading }) {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length && (
        <Section title="Top Rated Shows">
          {topRated.map((cur) => (
            <span key={cur.id}>{cur.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length && (
        <Section title="Popular Shows">
          {popular.map((cur) => (
            <span key={cur.id}>{cur.name}</span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length && (
        <Section title="Airing Today">
          {airingToday.map((cur) => (
            <span key={cur.id}>{cur.name}</span>
          ))}
        </Section>
      )}
    </Container>
  );
}

TVPresenter.propTypes = {
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
