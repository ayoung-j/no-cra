const App = () => {
    const apiUrl = process.env.APP_API_URL;
    console.log(apiUrl);
    return <h1>Hello, World!</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
