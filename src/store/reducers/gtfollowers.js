const initialState = {
    gts: []
}

const gtsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GTS":
            const gtsPayload = action.payload;
            const gtsDatas = gtsPayload.map((gt) => { return gt})
            if (gtsDatas.length === 0) {
                console.log('reducers recents error')
            }
            // console.log(recentDatas)
            return {...state, gts: gtsDatas}
        default:
            return state;
    }
}

export default gtsReducer;