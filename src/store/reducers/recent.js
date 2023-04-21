const initialState = {
    recents: []
}

const recentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RECENT":
            const recentPayload = action.payload;
            const recentDatas = recentPayload.map((recent) => { return recent})
            if (recentDatas.length === 0) {
                console.log('reducers recents error')
            }
            // console.log(recentDatas)
            return {...state, recents: recentDatas}
        default:
            return state;
    }
}

export default recentReducer;