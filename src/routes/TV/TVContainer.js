import { tvApi } from "api";
import { Component } from "react";
import TVPresenter from "./TVPresenter";

class TVContainer extends Component {
  state = {
    popular: null,
    topRated: null,
    airingToday: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      this.setState({
        popular,
        topRated,
        airingToday,
      });
    } catch (error) {
      this.setState({
        error: `Error: ${error}`,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { popular, topRated, airingToday, error, loading } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
export default TVContainer;
