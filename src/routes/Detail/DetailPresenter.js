import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;
const Backdrop = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${(prop) => prop.bgUrl});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;
const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

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
      <Content>
        <Cover
          bgUrl={
            result.poster_path
              ? `https://image.tmdb.org/t/p/w300${result.poster_path}`
              : "https://upload.wikimedia.org/wikipedia/commons/6/6d/No_image.png"
          }
        />
      </Content>
    </Container>
  );
}

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
