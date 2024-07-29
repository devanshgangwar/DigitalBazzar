// create a context 
// provider 
// consumer => useContext hook

import { Children, createContext,useContext, useEffect, useReducer } from "react"
import axios from "axios";
import reducer from "../reducer/productReducer"

const API = "https://api.pujakaitem.com/api/products";

const AppContext = createContext();

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading: false,
    singleProduct:{}
};

const AppProvider = ({children})=>{
    
    const [state , dispatch] = useReducer(reducer , initialState)

    const getProduct=async(url)=>{
         dispatch({type:"SET_LOADING"})   // dispatch call the action method of reducer
       try {
         const res = await axios.get(url);
         const products = await res.data;
         dispatch({type:"SET_API_DATA" , payload:products});
 
       } catch (error) {
           dispatch({type:"API_ERROR"})
       }
    }
     
     // my second api call for  single product
     const getSingleProduct = async(url)=>{
      dispatch({type:"SET_SINGLE_LOADING"}) 
       try{
           const res = await axios.get(url);
           const singleProduct = await res.data;
           dispatch({type:"SET_SINGLE_PRODUCT" , payload:singleProduct})
       }catch(error){
           dispatch({type:"SET_SINGLE_ERROR"})
       }
     }



    useEffect(()=>{
        getProduct(API);
    },[]);

      return (
        <AppContext.Provider  value={{...state,getSingleProduct}}>
            {children}
        </AppContext.Provider>
      )
}

// custom hooks 
const useProductContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider , AppContext,useProductContext} ;