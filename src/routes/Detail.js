import React from "react";

// 리액트에서 항상 props가 있고 정보를 전달함
// function Detail(props) {
//   console.log(props);
//   return <span>hello</span>;
// }

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      // 여기 else가 없으면 componentDidMount로 가기 전에 에러가 나고 끝난다. 이렇게 처리해줘야함.
      return null;
    }
  }
}

export default Detail;
