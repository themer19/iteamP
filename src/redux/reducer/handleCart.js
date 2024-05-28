const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'ADD_TO_CART':
            const exist = state.find((x)=>x.id === product.id);
            if(exist)
            {return state.map((x)=> x.id === product.id ? {...x,qty: x.qty + 1 }:x);}
            else
            {
                const product = action.payload;
                return[...state,{ ...product,qty:1,}]
            }
           
            case 'REMOVE_FROM_CART':
        const existe1 =state.find((x)=> x.id === product.id);
        if(existe1.qty === 1 )
        {
            return state.filter((x)=>x.id !== existe1.id);
        }else
        {
            return state.map((x)=>x.id === product.id ?{...x,qty: x.qty-1}:x);
        }
       
            
            case 'INCREMENT_QUANTITY':
                return state.map(item => {
                  if (item.id === action.payload.id) {
                    return { ...item, qty: item.qty + 1 };
                  }
                  return item;
                });
              case 'DECREMENT_QUANTITY':
                return state.map(item => {
                  if (item.id === action.payload.id && item.qty > 1) {
                    return { ...item, qty: item.qty - 1 };
                  }
                  return item;
                });
                case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
}

export default handleCart;
