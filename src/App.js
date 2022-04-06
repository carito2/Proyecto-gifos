import "./styles/styles.css";
import "./styles/stylesDarkMode.css";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import { getUrl } from "./helpers/getUrl";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Switch } from "react-router-dom";

export default function App() {
  const {
    darkMode,
    searchButton,
    setGifList,
    searchInput,
    setCategoryList,
    setLoading
  } = useContext(AppContext);

  let url = "";
  const apiKey = "api_key=4qPAdUXFgWTesrM9uSZbsqUnBd15wOFz";
  url = getUrl(apiKey, searchButton, searchInput);

  useEffect(() => {
    async function fetchMyApi() {
      setLoading(true);
      let peticion = await fetch(url);
      setLoading(false);
      let res = await peticion.json();
      let data = res.data;
      setGifList(data);
    }
    fetchMyApi();
  }, [setGifList, url, setLoading]);

  useEffect(() => {
    async function startAutocomplete() {
      let peticion = await fetch(
        `https://api.giphy.com/v1/gifs/search/tags?${apiKey}&limit=5&offset=0&rating=g&lang=en&q=${searchInput}`
      );
      let res = await peticion.json();
      let data = res.data;
      let categories = data.map((n) => {
        return n.name;
      });
      setCategoryList(categories);
    }
    startAutocomplete();
  }, [apiKey, searchInput, setCategoryList]);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </div>
  );
}
