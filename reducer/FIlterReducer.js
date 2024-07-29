const FilterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":

            let priceArr = action.payload.map((curElem)=>curElem.price);
            //Math.max.apply(null , priceArr)

            // let maxPrice = priceArr.reduce((initialVal , curVal)=>Math.max(initialVal,curVal),0);

            let maxPrice = Math.max(...priceArr )
            return {

                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters:{...state.filters , maxPrice:maxPrice , price:maxPrice},
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            }


        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }

        case "GET_SORT_VALUE":
            //1st way , not recommended
            //    let userSortValue = document.getElementById("sort")
            //    let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

            return {
                ...state,
                sorting_value: action.payload,
            }

        case "SORTING_PRODUCTS":
            let newSortData;

            const { filter_products } = state
            let tempSortData = [...filter_products]

            const sortingProducts = (a, b) => {
                if (state.sorting_value === "lowest") {
                    return a.price - b.price
                }
                if (state.sorting_value === "highest") {
                    return b.price - a.price
                }
                if (state.sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }
                if (state.sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            }

            newSortData = tempSortData.sort(sortingProducts)


            // if(state.sorting_value === "lowest"){
            //     const sortingProducts=(a,b)=>{
            //         return a.price - b.price
            //     }
            //     newSortData=tempSortData.sort(sortingProducts)
            // }
            // if(state.sorting_value === "highest"){
            //     const sortingProducts=(a,b)=>{
            //         return b.price - a.price
            //     }
            //     newSortData=tempSortData.sort(sortingProducts)
            // }
            // if(state.sorting_value === "a-z"){
            //     newSortData = tempSortData.sort((a,b)=>{
            //        return a.name.localeCompare(b.name);
            //     })
            // }
            // if(state.sorting_value === "z-a"){
            //     newSortData = tempSortData.sort((a,b)=>{
            //        return b.name.localeCompare(a.name);
            //     })
            // }


            return {
                ...state,
                filter_products: newSortData,

            }

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCTS" :
            let {all_products} = state;
            let tempFilterProduct = [...all_products];
            const {text , category ,company , color , price} =state.filters;
            
            if(text){
                tempFilterProduct = tempFilterProduct.filter((curElem)=>{
                 return curElem.name.toLowerCase().includes(text);
            })
            }

            if(category !== 'all'){
                tempFilterProduct = tempFilterProduct.filter((curElem)=>{
                    return curElem.category === category;
                })
            }
            if(company !== 'all'){
                tempFilterProduct = tempFilterProduct.filter((curElem)=>{
                    return curElem.company === company;
                })
            }
            if(color !== 'all'){
                tempFilterProduct = tempFilterProduct.filter((curElem)=>{
                   return curElem.colors.includes(color)
                })
            }
            if(price === 0){
                tempFilterProduct = tempFilterProduct.filter((curElem)=> curElem.price == price)
            }else{
                tempFilterProduct = tempFilterProduct.filter((curElem)=> curElem.price <= price)
            }
            return {
                ...state,
                filter_products : tempFilterProduct,
            }

        case "CLEAR_FILTERS":
            return{
                ...state,
                filters:{
                    ...state.filters,
                    text:"",
                    category:"all",
                    company:"all",
                    color:'all',
                    maxrice:0,
                    price : state.filters.maxPrice,
                    minPrice:state.filters.maxPrice,

                },
            }    
        default:
            return state
    }
}
export default FilterReducer