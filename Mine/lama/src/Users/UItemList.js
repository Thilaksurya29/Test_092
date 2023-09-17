import {useEffect, useState} from 'react';
import {getItem} from "../Components/api"; 

const ItemList = () =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        return async () => {
            const response = await getItem();
            setItems(response);
            console.log("This is from useEffect", response);
        };
    }, []);



 return (
        <div className="container">
            <h3 className="text-primary">Item List</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Item Id</th>
                        <th>Descrition</th>
                        <th>Issue Status</th>
                        <th>Item Make</th>
                        <th>Item Category</th>
                        <th>Item Valuation</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.itemid}>
                            <td>{item.description}</td>
                            <td>{item.issueStatus}</td>
                            <td>{item.itemMake}</td>
                            <td>{item.itemCategory}</td>
                            <td>{item.itemValuation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ItemList;