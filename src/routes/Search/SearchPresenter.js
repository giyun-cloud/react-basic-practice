import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "components/Section";
import Loader from "components/Loader";
import Message from "components/Message";

const Container = styled.div`
  padding: 0 20px;
`;
const Form = styled.form``;
const Input = styled.input`
  all: unset;
  width: 100%;
`;

function SearchPresenter({
  movieResult,
  tvResults,
  searchStr,
  error,
  loading,
  handleSubmit,
  updateStr,
  storeStr,
}) {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={updateStr}
          placeholder="Please enter search term in English"
          value={searchStr}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResult && movieResult.length > 0 && (
            <Section title="Movie Results">
              {movieResult.map((cur) => (
                <span key={cur.id}>{cur.title}</span>
              ))}
            </Section>
          )}

          {tvResults && tvResults.length > 0 && (
            <Section title="TV Results">
              {tvResults.map((cur) => (
                <span key={cur.id}>{cur.name}</span>
              ))}
            </Section>
          )}
        </>
      )}
      {error ? <Message text={error} color="#e67e22" /> : null}
      {tvResults && movieResult && !movieResult.length && !tvResults.length && (
        <Message text={`Not Found: ${storeStr}`} color="#95a5a6" />
      )}
    </Container>
  );
}

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResults: PropTypes.array,
  searchStr: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateStr: PropTypes.func.isRequired,
  storeStr: PropTypes.string,
};

export default SearchPresenter;
