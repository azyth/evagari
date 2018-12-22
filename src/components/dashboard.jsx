import React, { Component } from 'react';
import PlayerCard from './player_card';
import { connect } from 'react-redux';


class Dashboard extends Component {
    
    render() { 
        return ( 
            <div className='dash_board'>

                <PlayerCard player={1}></PlayerCard>
                <PlayerCard player={2}></PlayerCard>
                <div className='player_cell m'>
                    <p>PLAYER TURN</p>
                    <p>{this.props.player_turn}</p>
                </div>
                <PlayerCard player={3}></PlayerCard>
                <PlayerCard player={4}></PlayerCard>

            </div>
         );
    }
}

const mapStateToProps = state => state
 
export default connect(mapStateToProps)(Dashboard);