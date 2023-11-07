import Card from "../Card/Card";

import style from "./Cards.module.css"

const Cards = ({games}) => {

    
    return(
        <div className={style.container}>
           {games?.map((game) => {
            return <Card key={game.id} id={game.id} name={game.name} background_image={game.image} genres={game.genres} rating={game.rating} />
           })}
        </div>
    )
};

export default Cards;