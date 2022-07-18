import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movieList: [
                {
                    id: 0,
                    image: "https://i.etsystatic.com/30490360/r/il/99cb52/3251441926/il_fullxfull.3251441926_hlky.jpg",
                    name: "Hook",
                    synopsis:"When his young children are abducted by his old nemesis, Capt. Hook (Dustin Hoffman), middle-aged lawyer Peter Banning (Robin Williams) returns to his magical origins as Peter Pan. Peter must revisit a foggy past in which he abandoned Neverland for family life, leaving Tinkerbell (Julia Roberts) and the Lost Boys to fend for themselves. Given their bitterness toward Peter for growing up -- and their allegiance to their new leader, Rufio -- the old gang may not be happy to see him.",
                    reviews: []
                },
                
                {
                    id: 1,
                    image: "https://image.tmdb.org/t/p/original/bdHG5Mo83VPobeZZdlSz0Y7HQHB.jpg",
                    name: "Jumanji",
                    synopsis: "A magical board game unleashes a world of adventure on siblings Peter (Bradley Pierce) and Judy Shepherd (Kirsten Dunst). While exploring an old mansion, the youngsters find a curious, jungle-themed game called Jumanji in the attic. When they start playing, they free Alan Parrish (Robin Williams), who's been stuck in the game's inner world for decades. If they win Jumanji, the kids can free Alan for good -- but that means braving giant bugs, ill-mannered monkeys and even stampeding rhinos!",
                    reviews: []
                },

                {
                    id: 2,
                    image: "https://lumiere-a.akamaihd.net/v1/images/au_20cs_fight_club_poster_bd27ffe3.jpeg",
                    name: "Fight Club",
                    synopsis: "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
                    reviews: []
                },

                {
                    id: 3,
                    image: "https://image.tmdb.org/t/p/original/456FcvyTujRwzgoMoKKoheeCOlU.jpg",
                    name: "Jurassic Park",
                    synopsis: "In Steven Spielberg's massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park's mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt.",
                    reviews: []
                }
            ]
        }
    }
    
    render() {
        return(
            <div className="card w=75">
                <Movie movie={this.state.movieList[0]}/>
                <Movie movie={this.state.movieList[1]}/>
                <Movie movie={this.state.movieList[2]}/>
                <Movie movie={this.state.movieList[3]}/>
            </div>
        )
    }
}