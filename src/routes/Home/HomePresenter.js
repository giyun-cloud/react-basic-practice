import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "components/Section";
import Loader from "components/Loader";
import Message from "components/Message";
import Poster from "components/Poster";

const Container = styled.div`
  padding: 20px;
`;

function HomePresenter({ nowPlaying, upcoming, popular, error, loading }) {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length && (
        <Section title="Now Playing">
          {nowPlaying.map((cur) => (
            <Poster
              key={cur.id}
              id={cur.id}
              title={cur.title || cur.original_title}
              isMovie
              imageUrl={cur.poster_path}
              rating={cur.vote_average}
              year={cur.release_date && cur.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length && (
        <Section title="Upcoming Movies">
          {upcoming.map((cur) => (
            <Poster
              key={cur.id}
              id={cur.id}
              title={cur.title || cur.original_title}
              isMovie
              imageUrl={cur.poster_path}
              rating={cur.vote_average}
              year={cur.release_date && cur.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length && (
        <Section title="Popular Movies">
          {popular.map((cur) => (
            <Poster
              key={cur.id}
              id={cur.id}
              title={cur.title || cur.original_title}
              isMovie
              imageUrl={cur.poster_path}
              rating={cur.vote_average}
              year={cur.release_date && cur.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {error ? <Message text={error} color="#e67e22" /> : null}
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
