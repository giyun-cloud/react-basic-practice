import { moivesApi, tvApi } from "api";
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

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchStr } = this.state;
    if (searchStr !== "") this.searchByStr();
    this.storeStr = searchStr;
  };

  updateStr = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchStr: value,
    });
  };

  searchByStr = async () => {
    const { searchStr } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResult },
      } = await moivesApi.search(searchStr);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchStr);
      this.setState({ movieResult, tvResults });
    } catch (error) {
      this.setState({
        error: "Error :" + error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
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
        handleSubmit={this.handleSubmit}
        updateStr={this.updateStr}
        storeStr={this.storeStr}
      />
    );
  }
}
export default SearchContainer;
