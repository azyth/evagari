import React, { Component } from 'react';
import { connect } from 'react-redux';
import Square from './square';

class PlayerBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orientation: 1,
            player: props.player, //1-4
         }
    }
    top = (player) => {
        return player < 3 ? 0 : 410;
    }
    left = (player) => {
        return (player === 1 || player === 4)? 0 : 410;
    }
    rotate = (player) => {
        // let d;
        // switch (player) {
        //     case 1:
        //         d = 0;
        //         break;
        //     case 2:
        //         d = 90;
        //         break;
        //     case 3:
        //         d = 180;
        //         break;
        //     case 4:
        //         d = 270;
        //         break;
        //     default:

        // }
        // return 'rotate(' + d + 'deg)';
        return 'rotate(' + this.props.board['q_'+this.props.player].rotation + 'deg)';
    }
    styles = {
        quadrant: {
            transform: 'rotate(' + this.props.board['q_'+this.props.player].rotation + 'deg)', //this.rotate(this.props.player),
            borderColor: '#ff0000',
            borderStyle: 'solid',
            boarderWidth: 5
        }
        
    }
    render() { 
        return ( 
            <div className={ 'quadrant q'+this.props.quadrant }>
            <div id={'p'+this.props.player} className='player_board' style={this.styles.quadrant}>
                <Square number={0} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={1} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={2} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={3} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={4} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={5} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={6} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={7} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={8} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={9} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={10} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={11} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={12} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={13} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={14} player={this.props.player} quadrant={this.props.quadrant}></Square>
                <Square number={15} player={this.props.player} quadrant={this.props.quadrant}></Square>
            </div>
            </div>
         );
    }
}
const mapStateToProps = state => state
 
export default connect(mapStateToProps)(PlayerBoard);