const CartReducer = (state, action) =>{
    switch (action.type) {
        case "ADD":
            const data = state.find(item => item.id === action.payload.p.id)
            if(data){
                return state.map(item=> item.id === action.payload.p.id ? {...item, quantity:item.quantity + 1} :item )
            }
            return [...state, {...action.payload.p, quantity:1} ]
        case "REMOVE":
         return state.filter((item)=> item.id !== action.payload.id)
        case "INCREASE":
            return state.map((item)=>item.id === action.payload.id ? {...item, quantity:item.quantity + 1 > item.rating.count ? item.rating.count : item.quantity + 1}:item)
        case "DECREASE":
            return state.map((item)=> item.id === action.payload.id ? {...item, quantity:item.quantity -1 < 1 ? 1 : item.quantity -1} :item)
    }
}
export default CartReducer;