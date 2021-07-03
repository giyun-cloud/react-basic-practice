import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
`;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(prop) => prop.bgUrl});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
`;
const Content = styled.div`
  display: flex;
`;
const Cover = styled.div``;

function DetailPresenter({ result, error, loading }) {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgUrl={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/w300${result.backdrop_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/6/6d/No_image.png"
        }
      />
    </Container>
  );
}

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
