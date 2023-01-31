import React, { Component } from "react";
import "./App.css";
import Champions from "./ChessInfo/Champion";

class App extends Component {
  state = {
    listChamp: [
      { name: "Магнус Карлсен", years: "2013-2022" },
      { name: "Вишванатан Ананд", years: "2007-2013" },
      { name: "Владимир Крамник", years: "2000-2007" },
      { name: "Гарри Каспаров", years: "1985-2000" },
      { name: "Анатолий Карпов", years: "1975-1985" },
      { name: "Роберт Фишер", years: "1970-1975" },
      { name: "Борис Спасский", years: "1969-1972" },
      { name: "Тигран Петросян", years: "1963-1969" },
      { name: "Михаил Таль", years: "1960-1961" },
      { name: "Василий Смыслов", years: "1957-1958" },
      { name: "Михайл Ботвинник", years: "1948-1963" },
      { name: "Макс Эйве", years: "1935-1937" },
      { name: "Александр Алехин", years: "1927-1946" },
      { name: "Хосе-Рауль Капабланка", years: "1951-1927" },
      { name: "Эмануил Ласкер", years: "1894-1921" },
      { name: "Вильгельм Стейниц", years: "1886-1894" },
    ],
    pageTitle: "World champion",
    showChampions: false,
    calcPress: 0,
  };
  onChangeTitle = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    });
  };
  showChamp = () => {
    this.setState({
      showChampions: !this.state.showChampions,
    });
  };

  plusPress = () => {
    this.setState({
      calcPress: ++this.state.calcPress,
    });
  };

  minusPress = () => {
    this.setState({
      calcPress: --this.state.calcPress,
    });
  };

  render() {
    const divStyle = { textAlign: "center" };
    let champ = null;
    if (this.state.showChampions) {
      champ = this.state.listChamp.map((champ, index) => {
        return (
          <Champions
            key={index}
            name={champ.name}
            years={champ.years}
            onChangeTitle={() => this.onChangeTitle(champ.name)}
          />
        );
      });
    }

    return (
      <div style={divStyle}>
        <button onClick={this.plusPress}>+</button>
        <button onClick={this.minusPress}>-</button>
        <p>{this.state.calcPress}</p>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.showChamp}>Show Champions</button>
        {champ}
      </div>
    );
  }
}

export default App;
