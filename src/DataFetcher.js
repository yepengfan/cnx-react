import React, { Component } from "react";

class DataFetcher extends Component {
  baseUrl = "https://vggf9tdnvb.execute-api.ap-southeast-2.amazonaws.com/dev/";

  state = {
    status: null,
    data: null
  };

  async fetch() {
    const url = `${this.baseUrl}${this.props.path}`;
    let res = await fetch(url);
    do {
      res = await fetch(url);
      this.setState({ status: res.status });
      console.log(res.status);
    } while (res.status !== 200);

    const data = await res.json();
    this.setState({ data: data, status: res.status });
  }

  async componentDidMount() {
    await this.fetch();
  }

  render() {
    return this.props.children({
      data: this.state.data,
      status: this.state.status
    });
  }
}

export default DataFetcher;
