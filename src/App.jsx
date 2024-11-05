import GithubProfileFinder from "./assets/components/Github-Profile-Finder/Index";

const App = () => {

  return (<div>
    <GithubProfileFinder url={'https://api.github.com/users'} />
  </div>);
}
export default App;