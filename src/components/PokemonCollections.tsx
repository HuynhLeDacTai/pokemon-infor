import React from 'react'
import { Detail, Pokemon, PokemonDetail } from '../interface'
import PokemonList from './PokemonList';
import "./pokemon.css"

interface Props {
    pokemons: PokemonDetail[];
    detail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>
}

const PokemonCollections: React.FC<Props> = (props) => {
    const { pokemons, detail, setDetail } = props

    const selectPokemon = (id: number) => {
        if (!detail.isOpened) {
            setDetail({
                id: id,
                isOpened: true,
            });
        }
    }
    return (
        <>
            <section
                className={
                    detail.isOpened
                        ? "collection-container-active"
                        : "collection-container"
                }
            >
                {detail.isOpened ? (
                    <div className="overlay"></div>
                ) : (
                    <div className=""></div>
                )}
                {pokemons.map((pokemon) => {
                    return (
                        <div onClick={() => selectPokemon(pokemon.id)}>
                            <PokemonList
                                detail={detail}
                                setDetail={setDetail}
                                key={pokemon.id}
                                name={pokemon.name}
                                id={pokemon.id}
                                abilities={pokemon.abilities}
                                image={pokemon.sprites.front_default}
                            />
                        </div>
                    );
                })}
            </section>
        </>
    )
}

export default PokemonCollections