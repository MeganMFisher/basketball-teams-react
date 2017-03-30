const SEND_PLAYER_TO_COURT = 'SEND_PLAYER_TO_COURT';

const initialState = {
        benched: ['griffin', 'pierce', 'crawford'],
        onCourt: ['paul', 'redick', 'rivers']
}

export default function reducer(state=initialState, action) {
    switch(action.type){
        case SEND_PLAYER_TO_COURT:
        let newOnCourt = [...state.onCourt];

        newOnCourt.push(action.player);

        let newBench = [...state.benched];

        newBench.slice(newBench.indexOf(action.player), 1);

        return Object.assign({}, state, {
            benched: newBench,
            onCourt: newOnCourt
        })
        
    }
}