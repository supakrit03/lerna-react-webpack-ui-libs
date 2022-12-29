import FooCat from "./assets/foo-cat.png";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      App react awesome test <img src={FooCat} alt={FooCat} />
    </div>
  );
};

export default App;
