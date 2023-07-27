import React from 'react'
import "./pokemon.css"
import { Detail } from '../interface';
import { useState } from 'react';
import { useEffect } from 'react';
interface Props {
    name: string;
    id: number;
    image: string;
    abilities: {
        name: string;
        ability: string;
    }[] | undefined;
    detail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonList: React.FC<Props> = (props) => {
    const { name, id, image, abilities, detail, setDetail } = props
    const [isSelected, setSelected] = useState<boolean>(false)

    useEffect(() => {
        setSelected(id === detail?.id)
    }, [detail]);

    const closeDetail = () => {
        setDetail({
            id: 0,
            isOpened: false,
        });
    };
    return (
        <div className="">
            {isSelected ? (
                <section className="pokemon-list-detailed">
                    <div className="detail-container">
                        <p className="detail-close" onClick={closeDetail}>
                            X
                        </p>
                        <div className="detail-info">
                            <img src={image} alt="pokemon" className="detail-img" />
                            <p className="detail-name"> {name}</p>
                        </div>
                        <div className="detail-skill">
                            <p className="detail-ability"> Ablities: </p>
                            {abilities?.map((ab: any) => {
                                return <div className=""> {ab.ability.name}</div>;
                            })}
                        </div>
                    </div>
                </section>
            ) : (
                <section className="pokemon-list-container">
                    <p className="pokemon-name"> {name} </p>
                    <img src={image} alt="pokemon" />
                </section>
            )}
        </div>
    )
}

export default PokemonList