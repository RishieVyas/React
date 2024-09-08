const parent = React.createElement(
    "div",
    {
        id: "parent"
    },
    [React.createElement(
        "div",
        {
            id: "child"
        },
        [React.createElement(
            "h1",
            {
                id: "grand-child "
            },
            "Hi I am the heading from child"
        ),
        React.createElement(
            "h2",
            {
                id: "grand-child "
            },
            "Hi I am the 2nd heading from child"
        )]
    ),
    React.createElement(
        "div",
        {
            id: "child"
        },
        [React.createElement(
            "h1",
            {
                id: "grand-child "
            },
            "Hi I am the heading from child II"
        ),
        React.createElement(
            "p",
            {
                id: "grand-child "
            },
            React.createElement(
                "p",
                {
                    id: "grand-child "
                },
                "Hi I am the paragraph from child II"
            )
        )]
    )]
);

const root = ReactDOM.createRoot(
    document.getElementById("root")
); // This root will get the reference of the div with id root and this is wherea ll the react code will be rendered

root.render(parent); // heading is a object which is created using React.createElement and render is comverting it into html and rendering it on the screen