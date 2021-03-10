export const initialState={
    basket:[],
    user:null
}

export const getBasketTotal=(basket)=>{
 return basket?.reduce((amount,item)=>{
    return amount+item.price
  },0)
}

export const reducer=(state,action)=>{
  console.log(action);
  
  switch(action.type){
    case "SET_USER":
      return {...state,user:action.user}
    case "ADD_TO_BASKET": 
          return {...state,basket:[...state.basket,action.item]}
    case "REMOVE_FROM_BASKET":
            const newbasket=[...state.basket]
            const index=state.basket.findIndex((basketItem)=>{
             return  basketItem.id===action.id
            })
          if(index>=0){
            newbasket.splice(index,1)
          }else{
            console.warn("No such id is present")
          }
          return {...state,basket:newbasket}

    default:
       return state
    
    }
}

