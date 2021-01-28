
// export default (state = [], action) => {
//     if(action.type == 'FETCH_POSTS'){
//         return action.payload;
//     }
//     return state;
// }

// tooye react action ha ba switch marsoom tar hastan

const f  =(state = [], action)=>{
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}

export default f;