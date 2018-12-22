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
        let d;
        switch (player) {
            case 1:
                d = 0;
                break;
            case 2:
                d = 90;
                break;
            case 3:
                d = 180;
                break;
            case 4:
                d = 270;
                break;
            default:

        }
        return 'rotate(' + d + 'deg)';
    }
    styles = {
        quadrant: {
            transform: this.rotate(this.props.player),
            borderColor: '#ff0000',
            borderStyle: 'solid',
            boarderWidth: 5,
            // height: '50%',
            // width: '50%',
            // width:'100%',
            // paddingBottom: '100%'
        }
        
    }
    render() { 
        return ( 
            <div className={ 'quadrant q'+this.props.quadrant }>
            <div className='player_board' style={this.styles.quadrant}>
                <Square number={0} quadrant={this.props.quadrant}></Square>
                <Square number={1} quadrant={this.props.quadrant}></Square>
                <Square number={2} quadrant={this.props.quadrant}></Square>
                <Square number={3} quadrant={this.props.quadrant}></Square>
                <Square number={4} quadrant={this.props.quadrant}></Square>
                <Square number={5} quadrant={this.props.quadrant}></Square>
                <Square number={6} quadrant={this.props.quadrant}></Square>
                <Square number={7} quadrant={this.props.quadrant}></Square>
                <Square number={8} quadrant={this.props.quadrant}></Square>
                <Square number={9} quadrant={this.props.quadrant}></Square>
                <Square number={10} quadrant={this.props.quadrant}></Square>
                <Square number={11} quadrant={this.props.quadrant}></Square>
                <Square number={12} quadrant={this.props.quadrant}></Square>
                <Square number={13} quadrant={this.props.quadrant}></Square>
                <Square number={14} quadrant={this.props.quadrant}></Square>
                <Square number={15} quadrant={this.props.quadrant}></Square>
            </div>
            </div>
         );
    }
}
const mapStateToProps = state => state
 
export default connect()(PlayerBoard);