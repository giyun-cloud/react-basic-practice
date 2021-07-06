import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "components/Loader";
import Helmet from "react-helmet";
import Message from "../../components/Message";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 30px 50px;
`;
const Backdrop = styled.div`
  top: 50px;
  left: 0;
  position: fixed;
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
  display: flex;
  align-items: center;
`;
const Item = styled.span``;
const ImdbImg = styled.a`
  display: inline-block;
  width: 40px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg");
  height: 20px;
  background-size: cover;
`;
const Divider = styled.div`
  margin: 0 5px;
`;
const Overview = styled.p`
  width: 50%;
  word-break: keep-all;
  color: #bdc3c7;
  margin-bottom: 10px;
`;
const VideoSection = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const VideoContainer = styled.div`
  display: grid;
  width: 70%;
  max-height: 363px;
  overflow-y: auto;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 3px;
`;
const Video = styled.iframe``;
const Collection = styled.div``;
const OverFlowX = styled.div`
  overflow-x: auto;
`;
const Season = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.length}, 150px);
  grid-gap: 5px;
  height: 270px;
`;
const SeasonImage = styled.img`
  width: 150px;
  height: 250px;
`;

function DetailPresenter({ result, error, loading }) {
  console.log(result);
  return loading ? (
    <>
      <Helmet>
        <title>Loading | Namflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <>
      <Helmet>
        <title> Error | Namflix</title>
      </Helmet>
      <Message text={error} color="#e67e22" />
    </>
  ) : (
    <>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Namflix7
        </title>
      </Helmet>
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
              {result.release_date ||
                (result.first_air_date && (
                  <Item>
                    {result.release_date
                      ? result.release_date.substring(0, 4)
                      : result.first_air_date.substring(0, 4)}
                  </Item>
                ))}
              {result.runtime ||
                (result.episode_run_time && (
                  <>
                    <Divider> ▪ </Divider>
                    <Item>
                      {result.runtime
                        ? result.runtime
                        : result.episode_run_time[0]}
                      &nbsp;min
                    </Item>
                  </>
                ))}
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
              {result.imdb_id && (
                <>
                  <Divider> ▪ </Divider>
                  <ImdbImg
                    target="_blank"
                    href={`https://www.imdb.com/title/${result.imdb_id}/`}
                  />
                </>
              )}
            </ItemContainer>
            <Overview>{result.overview || "No overview found"}</Overview>
            {result.videos.results.length > 0 && (
              <>
                <VideoSection>- Videos -</VideoSection>
                <VideoContainer>
                  {result.videos.results.map((cur) => (
                    <Video
                      width="320"
                      height="180"
                      src={`https://www.youtube.com/embed/${cur.key}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  ))}
                </VideoContainer>
              </>
            )}
            {result.belongs_to_collection && (
              <Collection>
                <Link to={`/collection/${result.belongs_to_collection.id}`}>
                  Go Collections
                </Link>
              </Collection>
            )}
            {result.seasons && result.seasons.length > 0 && (
              <OverFlowX>
                <div> Seasons </div>
                <Season length={result.seasons.length}>
                  {result.seasons.map((cur) => (
                    <div>
                      <SeasonImage
                        src={`https://image.tmdb.org/t/p/w300/${cur.poster_path}`}
                      />
                      <div>{cur.name}</div>
                    </div>
                  ))}
                </Season>
              </OverFlowX>
            )}
          </Data>
        </Content>
      </Container>
    </>
  );
}

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
