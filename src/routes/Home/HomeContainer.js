import { moivesApi } from "api";
import { Component } from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const nowPlaying = await moivesApi.nowPlaying();
      console.log("💛", nowPlaying);
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
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
export default HomeContainer;
