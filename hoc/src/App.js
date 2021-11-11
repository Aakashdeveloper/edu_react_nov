import React from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './hoc';

const StockData =  [
    {
        id: 1,
        name: 'TCS'
            
    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
  ]

const UserData=[
    {
        id: 1,
        name: 'Krunal'
          
    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
]

const Stock = Hoc(StockList,StockData);
const User = Hoc(UserList,UserData);

const App = () => {
    return(
        <div>
            <Stock/>
            <User/>
        </div>
    )
}

export default App