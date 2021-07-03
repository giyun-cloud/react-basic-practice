import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;
const Image = styled.div`
  background-image: url(${(prop) => prop.bgUrl});
  height: 180px;
  background-size: cover;
  background-color: #2c3e50;
  border-radius: 4px;
  transition: 0.1s linear;
`;
const Rating = styled.span`
  bottom: 2px;
  right: 2px;
  position: absolute;
  color: #f1c40f;
  opacity: 0;
  transition: 0.1s linear;
`;
const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.45;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Title = styled.div`
  margin-bottom: 4px;
  word-break: keep-all;
  text-align: center;
`;
const Year = styled.div`
  color: #7f8c8d;
  font-size: 10px;
  text-align: center;
`;

function Poster({ id, imageUrl, title, isMovie = false, rating, year }) {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgUrl={
              imageUrl
                ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                : "https://upload.wikimedia.org/wikipedia/commons/6/6d/No_image.png"
            }
          />
          <Rating>
            {rating >= 0.5 ? (
              rating >= 2 ? (
                <i class="fas fa-star"></i>
              ) : (
                <i class="fas fa-star-half-alt"></i>
              )
            ) : (
              <i class="far fa-star"></i>
            )}
            {rating - 2 >= 1 ? (
              rating - 2 >= 2 ? (
                <i class="fas fa-star"></i>
              ) : (
                <i class="fas fa-star-half-alt"></i>
              )
            ) : (
              <i class="far fa-star"></i>
            )}
            {rating - 4 >= 1 ? (
              rating - 4 >= 2 ? (
                <i class="fas fa-star"></i>
              ) : (
                <i class="fas fa-star-half-alt"></i>
              )
            ) : (
              <i class="far fa-star"></i>
            )}
            {rating - 6 >= 1 ? (
              rating - 6 >= 2 ? (
                <i class="fas fa-star"></i>
              ) : (
                <i class="fas fa-star-half-alt"></i>
              )
            ) : (
              <i class="far fa-star"></i>
            )}
            {rating - 8 >= 1 ? (
              rating - 8 >= 1.7 ? (
                <i class="fas fa-star"></i>
              ) : (
                <i class="fas fa-star-half-alt"></i>
              )
            ) : (
              <i class="far fa-star"></i>
            )}
            &nbsp;{rating}
          </Rating>
        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
}

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  isMovie: PropTypes.bool,
  rating: PropTypes.number,
  year: PropTypes.string,
};

export default Poster;
