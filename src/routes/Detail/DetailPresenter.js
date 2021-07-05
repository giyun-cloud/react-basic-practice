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
const Data = styled.div`
  width: 70%;
  height: 100%;
  margin-left: 10px;
`;
const Title = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
`;
const ItemContainer = styled.div`
  margin-bottom: 10px;
`;
const Item = styled.span``;
const Divider = styled.span``;
const Overview = styled.p`
  width: 50%;
  word-break: keep-all;
  line-height: 1.4;
  color: #bdc3c7;
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
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : "https://upload.wikimedia.org/wikipedia/commons/6/6d/No_image.png"
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider> ▪ </Divider>
            <Item>
              {result.release_date
                ? result.runtime
                : result.episode_run_time[0]}
              &nbsp;min
            </Item>
            <Divider> ▪ </Divider>
            <Item>
              {result.genres.length &&
                result.genres.map((cur, index) =>
                  index + 1 === result.genres.length
                    ? cur.name
                    : `${cur.name} / `,
                )}
            </Item>
            <Divider> ▪ </Divider>
            <Item>
              {result.vote_average >= 0.5 ? (
                result.vote_average >= 2 ? (
                  <i class="fas fa-star"></i>
                ) : (
                  <i class="fas fa-star-half-alt"></i>
                )
              ) : (
                <i class="far fa-star"></i>
              )}
              {result.vote_average - 2 >= 1 ? (
                result.vote_average - 2 >= 2 ? (
                  <i class="fas fa-star"></i>
                ) : (
                  <i class="fas fa-star-half-alt"></i>
                )
              ) : (
                <i class="far fa-star"></i>
              )}
              {result.vote_average - 4 >= 1 ? (
                result.vote_average - 4 >= 2 ? (
                  <i class="fas fa-star"></i>
                ) : (
                  <i class="fas fa-star-half-alt"></i>
                )
              ) : (
                <i class="far fa-star"></i>
              )}
              {result.vote_average - 6 >= 1 ? (
                result.vote_average - 6 >= 2 ? (
                  <i class="fas fa-star"></i>
                ) : (
                  <i class="fas fa-star-half-alt"></i>
                )
              ) : (
                <i class="far fa-star"></i>
              )}
              {result.vote_average - 8 >= 1 ? (
                result.vote_average - 8 >= 1.7 ? (
                  <i class="fas fa-star"></i>
                ) : (
                  <i class="fas fa-star-half-alt"></i>
                )
              ) : (
                <i class="far fa-star"></i>
              )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview || "No overview found"}</Overview>
        </Data>
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
