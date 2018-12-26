 const initalState = { 
    player_turn: 1,
    move_in_progress: false,
    token_move_selected: false,
    limbo: null,
    board: {
        q_1: {
            controller: 1, //player
            rotation: 0,
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
            rotation: 90,
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
            rotation: 180,
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
            rotation: 270,
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

/*
returns a copy of a supplied object. 
this works with primitives, arrays and JSON objects, and any nested collection of them. 
*/
function recursiveCopyObject (obj) {
    if (!obj || typeof obj !== 'object') {
        return obj;
    } else if (Array.isArray(obj)) {
        let tempArray = [];
        obj.forEach((e) => {
            tempArray.push(recursiveCopyObject(e));
        });
        return tempArray;
    } else {
        let tempObj = {};
        Object.keys(obj).forEach((k)=>{
            tempObj[k] = recursiveCopyObject(obj[k]);
        });
        return tempObj
    }
}
 
 export function reducer (state = initalState, action) {
    console.log(action.type);
    // console.log(JSON.stringify(state))
    let newState;
    let newToken;
    switch (action.type) {
        case 'INIT_MOVE':
            return {
                ...recursiveCopyObject(state), move_in_progress: true, limbo: {...action.token}
            };
        case 'FINISH_MOVE':
            newState = recursiveCopyObject(state); // this only copies primary level feilds but complex sub objects are passed by reference.
            newToken = {...recursiveCopyObject(state.limbo), quadrant: action.quadrant, square: action.square};
            newState.board['q_'+ state.limbo.quadrant].squares[state.limbo.square] = {};
            newState.board['q_'+ newToken.quadrant].squares[newToken.square] = newToken;
            newState.player_turn = newState.player_turn === 3 ? newState.player_turn + 1 : (newState.player_turn + 1) % 4; // increment turn 1-4
            return {
                ...newState, move_in_progress: false, limbo: null, token_move_selected: false
            };
        case 'CAPTURE_TOKEN':
            newState = recursiveCopyObject(state);
            // newToken = {...state.limbo, quadrant: action.quadrant, square: action.square};
            // newState.board['q_'+ state.limbo.quadrant].squares[state.limbo.square] = {};
            // newState.board['q_'+ newToken.quadrant].squares[newToken.square] = newToken;
            newState['player_'+state.player_turn].captures.push(action.captured_token);
            return newState;
            // finish move will fire after this. (due to compound click handlers?)
        case 'DISMISS_TILE_OVERLAY':
            newState = recursiveCopyObject(state);
            newState.token_move_selected=true;
            return newState;
        case 'ROTATE_TILE':
            newState = recursiveCopyObject(state);
            const rotation = action.cw ? 90 : -90;
            newState.board['q_'+action.player].rotation+=rotation;
            // var curr_value = document.getElementById('p'+action.player).style.transform;
            var new_value = "rotate("+newState.board['q_'+action.player].rotation+"deg)";
            // if(curr_value !== ""){
            // var new_rotate = parseInt(curr_value.replace("rotate(","").replace(")","")) + 90;
            // new_value = "rotate(" + new_rotate + "deg)";
            // }
            document.getElementById('p'+action.player).style.transform = new_value;
            return newState;
        case 'FINISH_TURN':
            newState = recursiveCopyObject(state);
            newState.player_turn = newState.player_turn === 3 ? newState.player_turn + 1 : (newState.player_turn + 1) % 4; // increment turn 1-4
            return {
                ...newState, move_in_progress: false, limbo: null, token_move_selected: false
            };
        default:
            return state;
    }
 }
