import React, { Component } from 'react';
import PlayerCard from './player_card';
import { connect } from 'react-redux';


class Dashboard extends Component {
    
    render() { 
        return ( 
            <div  className='dashboard' style={{height:100, width:'100%', background: '#c0c0c0', textAlign: 'center', display: 'table'}}>
                <PlayerCard player={1}></PlayerCard>
                <PlayerCard player={2}></PlayerCard>
                <div style={{height:80, width:80, background: '#c0c0c0', margin: 10, display: 'table-cell'}}>
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