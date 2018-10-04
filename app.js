const players = [
    {
        name: "Maradona",
        score: 23,
        id: 1
    },
    {
        name: "Pele",
        score: 24,
        id: 2
    },
    {
        name: "Van Basten",
        score: 4,
        id: 3

    },
    {
        name: "Isaias",
        score: 98,
        id: 4

    }
];


const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: <strong>{ props.totalPlayers }</strong></span>
        </header>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
        <Counter
            score = {props.score} />
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
        <Header
            title = "Scoreboard"
            totalPlayers={props.initialPlayers.length} />
            {/* Players list*/}
            {props.initialPlayers.map( player =>
                <Player
                    name ={player.name}
                    score = {player.score}
                    key = {player.id.toString()}/>
            )}
        </div>
    );
}

// Its the render's job to interpret the elements objects and create DOM nodes out of it
ReactDOM.render(
    <App initialPlayers={players}/>, document.getElementById('root')
);