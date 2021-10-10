/* Global React ReactDOM */

const pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.Name),
    React.createElement("h2", {}, props.Animal),
    React.createElement("h2", {}, props.Breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(pet, {
      Name: "Luna",
      Animal: "Dog",
      Breed: "Havanese",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
