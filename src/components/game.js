import React, { Component } from 'react'
import Board from './board'
import Menu from './menu'
export default class game extends Component {
    constructor(props){
        super(props);
        this.state = {
            order: '',
            message: 'handling the puzzle'        
        }
    }
     
    componentWillMount = () =>{
        this.setState({order:this.randomOrder()})
    }
        
    gameStyle = {
        margin: '5%'
    }
    correctOrder = [1,2,3,4,5,6,7,8,null]

    handleRetry = (e) => {        
        let newOrder = this.randomOrder()
        this.setState({order:newOrder})
    }
    handleCheat = (e) => {
        this.setState({order:this.correctOrder})
    }
    handleSelect = (pos) => {

        if(!this.state.order[pos]){
            return
        }
        let nextMove = this.move(pos)

        if(nextMove.length===1){           
            let newOrder = [...this.state.order]
            newOrder[nextMove] = newOrder[pos]
            newOrder[pos] = null        
            if(this.checkWin(newOrder)){
                this.setState({order:newOrder,message:'congratulations'})
            }else{
                this.setState({order:newOrder})
            }
            
        }else{
            return
        }
        
    }
    randomOrder = () => {       
        let initOrder = [1,2,3,4,5,6,7,8];
        let randomOrder = [];
        do {
            for (let i=7;i>=0;i--){
                let randomIndex = Math.floor(Math.random()*(i+1));
                let itemAtIndex = initOrder[randomIndex]
                initOrder[randomIndex] = initOrder[i]
                randomOrder[i] = itemAtIndex
            }
            randomOrder.push(null)
        }while(initOrder.toString()===randomOrder.toString())
        return randomOrder
    };
    move = (pos) => {
        let neighbour = [
            [1,3],
            [0,2,4],
            [1,5],
            [0,4,6],
            [1,3,5,7],
            [2,4,8],
            [3,7],
            [4,6,8],
            [5,7]
        ]        
        let space = neighbour[pos].filter(i=>!this.state.order[i])          
        return space        
    }
    checkWin = (order) => {
        let isWin = (order.toString() === this.correctOrder.toString())
        return isWin
    }
    
    render() {
        return (
            <div style={this.gameStyle}>
                <div>
                    <Board  value={this.state.order} 
                            onClick={this.handleSelect}
                    />
                </div>
                <div>
                    <Menu   onClickRetry={this.handleRetry} 
                            onClickCheat={this.handleCheat}
                            message={this.state.message}                            
                    />
                </div>
            </div>
        ) 
    }
}

