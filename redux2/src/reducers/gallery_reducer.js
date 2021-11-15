export default function(state={},action){
    switch(action.type){
        case 'GALLERY_NEWS':
            return{...state, galnews:action.payload}
        default:
            return state
    }
}