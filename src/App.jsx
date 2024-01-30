import React, { useEffect, useState } from 'react';
import "./App.css"


const App = () => {

    const [data, setData] = useState([]);
    const [num, setnum] = useState(1);
    let mas = [];


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/?page=' + num).then(async (res) => {
            return await res.json();
        }).then((data) => {
            mas.push(data.results);
            console.log(mas);

            return setData(mas[0]);
        });
    })



    return (
        <div className='component'>
            {
                data.length ? data.map((item) => {
                    return (
                        <div className='item'>
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                        </div>
                    )
                }) : ''
            }

            <button onClick={() => {
                setnum(num + 5)
            }}>Дальше</button>


        </div>
    );
}

export default App;
