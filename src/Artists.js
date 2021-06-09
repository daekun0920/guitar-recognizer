import React from 'react'
import Artist from './Artist';
import artists from './DB';
import { useGuitar } from './GuitarContext';


function Artists(props) {
    const { guitarKind } = useGuitar()

    return (
        <div className="container">
            <h2>
                {guitarKind === 'Default' ? '' : 'Artists that use ' + guitarKind }
            </h2>
            <table>
                <tbody>
                    <tr>
                        {
                            guitarKind === 'Default' ? '' : 
                            artists[guitarKind].map((obj, i) => {
                                return (
                                    <td key={i}>
                                        <Artist key={i} name={obj.name} image={obj.image} />
                                    </td>
                                );
                            })
                        }
                        
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Artists
