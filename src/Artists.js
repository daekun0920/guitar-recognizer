import React from 'react'
import Artist from './Artist';
import artists from './DB';
import { useGuitar } from './GuitarContext';
import './Artists.css';

function Artists(props) {
    const { guitarKind } = useGuitar()

    return (
        <div>
            <div className="artists__intro">{guitarKind === 'Default' ? 'Please upload an image' : `Artists that use ${guitarKind}`}</div>
            <div className="container">
                {/* <table className="card__container"> 
                    <tbody>
                        <tr>
                            {
                                
                            }
                        </tr>
                    </tbody>
                </table> */}
                <ul className="card__container">
                {
                    guitarKind === 'Default' ? '' : 
                    artists[guitarKind].map((obj, i) => {
                        return (
                            <li>
                                <Artist key={i} name={obj.name} image={obj.image} className="artist__obj" />
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default Artists
