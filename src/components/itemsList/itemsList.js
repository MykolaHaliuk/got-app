import React, { useState, useEffect} from 'react';
// import '../itemDetails/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import "./showActors.css";
import Spiner from '../spiner';
import nextId from "react-id-generator";

function ItemsLIst ({getData, onCharSeelected, renderItem}) {

    
    const [charList, updateList] = useState([]);
   
    useEffect(() => {
        getData()
            .then(data => {
                updateList(data)
            })
    }, []) 


    
    function renderItems(arr) {

        return arr.map((item, i) => {
            const label = renderItem(item);
            return (
                <tr key={nextId()}>
                    <td 
                        className="select"
                        onClick={() => {onCharSeelected(i)}}
                    >{label}</td>
                </tr>
            )
            
        })
    }

    if(!charList){
        return <Spiner/>
    }

    const listItem = renderItems(charList);

    return(
    
        <Table className="table">
        <tbody>
            {listItem}
        </tbody>
        </Table>
    );

}
export default ItemsLIst;

