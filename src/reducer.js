 const initalState = { 
    player_turn: 1,
    move_in_progress: false,
    limbo: null,
    board: {
        q_1: {
            controller: 1, //player
            squares: [
                {player: 1, type: 'K', points: 4, quadrant: 1, square: 0},
                {player: 1, type: 'S', points: 1, quadrant: 1, square: 1},
                {},{},{},{},{},{},{},{},{},
                {player: 1, type: 'T', points: 2, quadrant: 1, square: 11},
                {player: 1, type: 'X', points: 3, quadrant: 1, square: 12},
                {},{},{}
            ], 
        },
        q_2: {
            controller: 2, //player
            squares: [
                {player: 2, type: 'K', points: 4, quadrant: 2, square: 0},
                {player: 2, type: 'S', points: 1, quadrant: 2, square: 1},
                {},{},{},{},{},{},{},{},{},
                {player: 2, type: 'T', points: 2, quadrant: 2, square: 11},
                {player: 2, type: 'X', points: 3, quadrant: 2, square: 12},
                {},{},{}
            ], 
        },
        q_3: {
            controller: 3, //player
            squares: [
                {player: 3, type: 'K', points: 4, quadrant: 3, square: 0},
                {player: 3, type: 'S', points: 1, quadrant: 3, square: 1},
                {},{},{},{},{},{},{},{},{},
                {player: 3, type: 'T', points: 2, quadrant: 3, square: 11},
                {player: 3, type: 'X', points: 3, quadrant: 3, square: 12},
                {},{},{}
            ], 
        },
        q_4: {
            controller: 4, //player
            squares: [
                {player: 4, type: 'K', points: 4, quadrant: 4, square: 0},
                {player: 4, type: 'S', points: 1, quadrant: 4, square: 1},
                {},{},{},{},{},{},{},{},{},
                {player: 4, type: 'T', points: 2, quadrant: 4, square: 11},
                {player: 4, type: 'X', points: 3, quadrant: 4, square: 12},
                {},{},{}
            ], 
        }
    },
    player_1: {
        tokens: [
            {player: 1, type: 'K', points: 4, quadrant: 1, square: 0},
            {player: 1, type: 'S', points: 1, quadrant: 1, square: 1},
            {player: 1, type: 'T', points: 2, quadrant: 1, square: 5},
            {player: 1, type: 'X', points: 3, quadrant: 1, square: 6}
        ],
        captures: [

        ],
    },
    player_2: {
        tokens: [
            {player: 2, type: 'K', points: 4, quadrant: 2, square: 0},
            {player: 2, type: 'S', points: 1, quadrant: 2, square: 1},
            {player: 2, type: 'T', points: 2, quadrant: 2, square: 5},
            {player: 2, type: 'X', points: 3, quadrant: 2, square: 6}
        ],
        captures: [

        ],
    },
    player_3: {
        tokens: [
            {player: 3, type: 'K', points: 4, quadrant: 3, square: 0},
            {player: 3, type: 'S', points: 1, quadrant: 3, square: 1},
            {player: 3, type: 'T', points: 2, quadrant: 3, square: 5},
            {player: 3, type: 'X', points: 3, quadrant: 3, square: 6}
        ],
        captures: [

        ],
    },
    player_4: {
        tokens: [
            {player: 4, type: 'K', points: 4, quadrant: 4, square: 0},
            {player: 4, type: 'S', points: 1, quadrant: 4, square: 1},
            {player: 4, type: 'T', points: 2, quadrant: 4, square: 5},
            {player: 4, type: 'X', points: 3, quadrant: 4, square: 6}
        ],
        captures: [

        ],
    },
    
};
 
 export function reducer (state = initalState, action) {
    console.log(action.type);
    // console.log(JSON.stringify(state))
    let newState;
    let newToken;
    switch (action.type) {
        case 'INIT_MOVE':
            return {
                ...state, move_in_progress: true, limbo: {...action.token}
            };
        case 'FINISH_MOVE':
            newState = {...state};
            newToken = {...state.limbo, quadrant: action.quadrant, square: action.square};
            newState.board['q_'+ state.limbo.quadrant].squares[state.limbo.square] = {};
            newState.board['q_'+ newToken.quadrant].squares[newToken.square] = newToken;
            return {
                ...newState, move_in_progress: false, limbo: null
            };
        case 'CAPTURE_TOKEN':
            newState = {...state};
            // newToken = {...state.limbo, quadrant: action.quadrant, square: action.square};
            // newState.board['q_'+ state.limbo.quadrant].squares[state.limbo.square] = {};
            // newState.board['q_'+ newToken.quadrant].squares[newToken.square] = newToken;
            newState['player_'+state.player_turn].captures.push(action.captured_token);
            return newState;
        default:
            return state;
    }
 }