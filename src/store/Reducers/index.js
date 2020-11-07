const INITIAL_STATE = {
    users: [],
    current_user: {},
}
export default (state = INITIAL_STATE,action) => {
    // console.log('action==>',action)
    switch (action.type){
        case "SETUSER":
            return({
                ...state,
                current_user: action.payload
            })
    }
    return state;
}