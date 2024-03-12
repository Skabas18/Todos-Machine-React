import './TodoSearch.css';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
function TodoSearch() {
    const {searchValue, setSearchValue } = useContext(TodoContext);
    return (
        <input
            placeholder="Cortar cebolla"
            className="TodoSearch"
            value ={searchValue} 
            onChange={(event)=>{
                console.log('Escribiste en el search');
                setSearchValue(event.target.value);
            }}/>
    );
}
export { TodoSearch };