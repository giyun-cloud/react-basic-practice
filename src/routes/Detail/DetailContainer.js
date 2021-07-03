import { moivesApi, tvApi } from "api";
import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
class DetailContainer extends Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      isTv: pathname.includes("/tv/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie, isTv } = this.state;
    if (isNaN(parseInt(id)) || (!isMovie && !isTv)) return push("/");
    let result;
    try {
      if (isMovie) ({ data: result } = await moivesApi.movieDetail(id));
      else if (isTv) ({ data: result } = await tvApi.tvDetail(id));
    } catch (error) {
      this.setState({
        error: "Error: " + error,
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
export default DetailContainer;
