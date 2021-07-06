import React, { Component } from "react";
import { moivesApi } from "api";
import CollectionPresenter from "./CollectionPresenter";
class CollectionContainer extends Component {
  state = {
    collections: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const { data: collections } = await moivesApi.collection(id);
      this.setState({ collections });
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
    const { collections, error, loading } = this.state;
    console.log(this.state);
    return (
      <CollectionPresenter
        collections={collections}
        error={error}
        loading={loading}
      />
    );
  }
}
export default CollectionContainer;
