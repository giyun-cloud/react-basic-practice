import { Component } from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {
  state = {
    movieResult: null,
    tvResults: null,
    searchStr: "",
    error: null,
    loading: false,
  };
  render() {
    const { movieResult, tvResults, searchStr, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResult={movieResult}
        tvResults={tvResults}
        searchStr={searchStr}
        error={error}
        loading={loading}
      />
    );
  }
}
export default SearchContainer;
