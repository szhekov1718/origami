import style from "./App.module.css"
import Header from "./components/Header/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";

import { Component } from "react";

import * as postService from "./services/postService";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    postService.getAll()
      .then(posts => {
        this.setState({ posts })
      })
  }

  render() {
    return (

      <div className={style.app}>
        <Header></Header>

        <div className={style.container}>
          <Menu></Menu>

          <Main posts={this.state.props}></Main>
        </div>
      </div>

    );
  }
}

export default App;

// function App() {

//   return (
//     <div className={style.app}>
//       <Header></Header>

//       <div className={style.container}>
//         <Menu></Menu>

//         <Main></Main>
//       </div>
//     </div>
//   );
// }