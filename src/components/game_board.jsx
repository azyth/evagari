import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerBoard from './player_board';
import PlayerTurnOverlay from './player_turn_overlay';

class GameBoard extends Component {


    styles = {
        board: {
            // position: 'relative',
            // width:'100%',
            // paddingBottom: '100%'
        }
    }
    render() { 
        return ( 
            <div className="game_container ">
            <div className="game_board" style={this.styles.board}>
                <PlayerBoard quadrant={1} player={1}></PlayerBoard>
                <PlayerBoard quadrant={2} player={2}></PlayerBoard>
                <PlayerBoard quadrant={3} player={3}></PlayerBoard>
                <PlayerBoard quadrant={4} player={4}></PlayerBoard>
                <PlayerTurnOverlay quadrant={1} player={1}></PlayerTurnOverlay>
                <PlayerTurnOverlay quadrant={2} player={2}></PlayerTurnOverlay>
                <PlayerTurnOverlay quadrant={3} player={3}></PlayerTurnOverlay>
                <PlayerTurnOverlay quadrant={4} player={4}></PlayerTurnOverlay>
            </div>
            </div>
         );
    }
}
const mapStateToProps = state => state

export default connect()(GameBoard);