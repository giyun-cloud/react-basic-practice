import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "components/Section";
import Loader from "components/Loader";

const Container = styled.div`
  padding: 0 20px;
`;

function HomePresenter({ nowPlaying, upcoming, popular, error, loading }) {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length && (
        <Section title="Now Playing">
          {nowPlaying.map((cur) => (
            <span key={cur.id}>{cur.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length && (
        <Section title="Upcoming Movies">
          {upcoming.map((cur) => (
            <span key={cur.id}>{cur.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length && (
        <Section title="Popular Movies">
          {popular.map((cur) => (
            <span key={cur.id}>{cur.title}</span>
          ))}
        </Section>
      )}
    </Container>
  );
}

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
