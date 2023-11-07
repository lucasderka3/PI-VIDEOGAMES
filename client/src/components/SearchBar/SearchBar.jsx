/* hooks */
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

/* actions */
import { getGameByName, getGames} from "../../redux/actions";


const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch()
    const videogames = useSelector(state=> state.videogames)
    

    const handleChange = (event) => {
        setName(event.target.value)
    };

    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(name){
            dispatch(getGameByName(name));
        }else{
            dispatch(getGames()); //Si el campo esta vacio vuelve a la pagina principal
        }
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleChange}/>
            <button type='button' onClick={handleSubmit}>Buscar</button>
            {
                <ul>
                    {videogames.map((game) => {  
                        <li>{game.name}</li>
                    })}
                </ul>
            }
        </div>
    )
};

export default SearchBar