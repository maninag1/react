let value=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"heading No1"),
React.createElement("h2",{},"heading No2")),React.createElement("h3",{},"heading No1"),
React.createElement("h4",{},"heading No2"));
    


    let  root=ReactDOM.createRoot(document.getElementById("root"));
root.render(value);