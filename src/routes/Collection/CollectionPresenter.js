import React from "react";
import PropTypes from "prop-types";
import Loader from "components/Loader.js";
import Poster from "components/Poster.js";
import Section from "components/Section.js";
import styled from "styled-components";
const Container = styled.div`
  padding: 20px;
`;

function CollectionPresenter({ collections, error, loading }) {
  console.log(collections);
  return loading ? (
    <Loader />
  ) : (
    collections && collections.parts.length && (
      <Container>
        <Section title={`${collections.name}`}>
          {collections.parts.map((cur) => (
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
      </Container>
    )
  );
}

CollectionPresenter.propTypes = {
  collections: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CollectionPresenter;
