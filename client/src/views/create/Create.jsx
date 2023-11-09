/* hooks */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

/* actions */
import { getGenres, postGame } from '../../redux/actions';

/* styles */
import styles from './Create.module.css';

const Create = () => {

  const dispatch = useDispatch();
  const genres = useSelector((state) => state.allGenres);

  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: "",
    platforms: "",
    genres: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const value = e.target.value;
  
    if (name === "platforms") {
      // Si es una plataforma, asigna como cadena si está marcado, de lo contrario, cadena vacía
      const updatedPlatforms = checked ? value : "";
      
      setInput({
        ...input,
        [name]: updatedPlatforms,
      });
    } else if (name === "genres") {
      // Si es un género, agrega o quita del arreglo según esté marcado o desmarcado
      const updatedGenres = checked
        ? [...input.genres, value]
        : input.genres.filter((genre) => genre !== value);
  
      setInput({
        ...input,
        genres: updatedGenres,
      });
    }
  };


  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
        name: input.name,
        description: input.description,
        image: input.image,
        released: input.released,
        rating: input.rating,
        platforms: input.platforms,
        genres: input.genres
    }
    console.log(newGame)

    dispatch(postGame(newGame));

    setInput({
        name: "",
        description: "",
        image: "",
        released: "",
        rating: "",
        platforms: "",
        genres: [],
    })
    
  };

  return (
    <div className={styles.container}>
      <Link to='/home'><button className={styles.bt}>Home</button></Link>
      <h1>Create Game</h1>
      <form className={styles.formRegister} onSubmit={handleSubmit}>
        <div>
          <input
            placeholder='Name'
            className={styles.controls}
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <textarea
            placeholder='Description'
            className={styles.controls}
            name="description"
            value={input.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            placeholder='Image URL'
            className={styles.controls}
            type="text"
            name="image"
            value={input.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            placeholder='Released'
            className={styles.controls}
            type="type"
            name="released"
            value={input.released}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            placeholder='Rating'
            className={styles.controls}
            type="number"
            name="rating"
            min='1'
            max='5'
            value={input.rating}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Platforms: </label>
          <input
            type="checkbox"
            name="platforms"
            value="PC"
            checked={input.platforms.includes('PC')}
            onChange={handleCheckboxChange}
          />
          PC
          <input
            type="checkbox"
            name="platforms"
            value="PlayStation"
            checked={input.platforms.includes('PlayStation')}
            onChange={handleCheckboxChange}
          />
          PlayStation
          <input
            type="checkbox"
            name="platforms"
            value="Xbox-One"
            checked={input.platforms.includes('Xbox-One')}
            onChange={handleCheckboxChange}
          />
          Xbox-One
          <input
            type="checkbox"
            name="platforms"
            value="Nintendo Switch"
            checked={input.platforms.includes('Nintendo Switch')}
            onChange={handleCheckboxChange}
          />
          Nintendo Switch
          <input
            type="checkbox"
            name="platforms"
            value="Wii"
            checked={input.platforms.includes('Wii')}
            onChange={handleCheckboxChange}
          />
          Wii
        </div>
        <br />
        <div>
          <label>Genres: </label>
          {genres.map((genre) => (
            <label key={genre.id}>
              <input
                type="checkbox"
                name="genres"
                value={genre.id}
                checked={input.genres.includes(genre.id.toString())}
                onChange={handleCheckboxChange}
              />
              {genre.name}
            </label>
          ))}
        </div>
        <br />
        <button className={styles.bt} type="submit" >Create Game</button>
      </form>
    </div>
  );
};

export default Create;