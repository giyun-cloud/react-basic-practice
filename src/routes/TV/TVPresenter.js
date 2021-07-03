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

function TVPresenter({ popular, topRated, airingToday, error, loading }) {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length && (
        <Section title="Top Rated Shows">
          {topRated.map((cur) => (
            <Poster
              key={cur.id}
              id={cur.id}
              title={cur.name || cur.original_name}
              imageUrl={cur.poster_path}
              rating={cur.vote_average}
              year={cur.first_air_date && cur.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length && (
        <Section title="Popular Shows">
          {popular.map((cur) => (
            <Poster
              key={cur.id}
              id={cur.id}
              title={cur.name || cur.original_name}
              imageUrl={cur.poster_path}
              rating={cur.vote_average}
              year={cur.first_air_date && cur.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length && (
        <Section title="Airing Today">
          {airingToday.map((cur) => (
            <Poster
              key={cur.id}
              id={cur.id}
              title={cur.name || cur.original_name}
              imageUrl={cur.poster_path}
              rating={cur.vote_average}
              year={cur.first_air_date && cur.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {error ? <Message text={error} color="#e67e22" /> : null}
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
