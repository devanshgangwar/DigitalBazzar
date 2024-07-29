import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from '../reducer/FIlterReducer'
const FilterContext = createContext();

const initialState = {
    filter_products :[],
    all_products :[],
    grid_view : false,
    sorting_value : "lowest",
    filters:{
        text:"",
        category:"all",
        company:"all",
        color:'all',
        maxrice:0,
        price : 0,
        minPrice:0,
    },
}

export const FilterContextProvider = ({children})=>{
    const {products} = useProductContext();
    const [state , dispatch] = useReducer(reducer, initialState);

    // to set grid view
    const setGridView= ()=>{
        return dispatch({type:"SET_GRID_VIEW"})
    }

    const setListView= ()=>{
        return dispatch({type:"SET_LIST_VIEW"})
    }

    //sorting function
    const sorting = (event)=>{
        let userValue = event.target.value;
        return dispatch({type:"GET_SORT_VALUE" , payload:userValue})
    }

    //update the filter value
    const updateFilterValue =(e)=>{
        let name = e.target.name
        let value = e.target.value

        return dispatch({type:"UPDATE_FILTER_VALUE" , payload:{name , value}})
    }

    //to clear filters
    const clearfilters=()=>{
        return dispatch({type:"CLEAR_FILTERS"})
    }

    //to sort the products
    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS"})
    } , [products ,state.sorting_value , state.filters])

    useEffect(()=>{
          dispatch({type:"LOAD_FILTER_PRODUCTS" , payload:products});
    } , [products])

    return(
        <FilterContext.Provider value={{...state , setGridView , setListView , sorting, updateFilterValue , clearfilters,}}>
        {children}
      </FilterContext.Provider>
    )  
}

export const useFilterContext = ()=>{
    return useContext(FilterContext)
}
    
      