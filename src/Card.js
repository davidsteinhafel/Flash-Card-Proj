import React from 'react'

class Card extends React.Component{
    state= {
        front:true
    };
    handleClick = () =>{
        this.setState({
            front: !this.state.front
        })
    }
    render(){
        let content;
        if(this.state.front){
            content = this.props.word;
        }
        else{
            content = this.props.definition;
        }
        // this.state.front && 
        return(
            <div>
                <p>{content}</p>
                <button onClick={this.handleClick}>Flip</button>
            </div>
        )
        
    }
}
export default Card;
