import React from 'react';
import { SubmitCard } from './Server';
import axios from 'axios';
import Card from './Card';
class SubmitNew extends React.Component {
    state = {
        id: '',
        Word: '',
        Definition: '',
        StackId: '',
        Stacks: [],
        currentStack: 1
    };
    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        if(name==='StackId'){
            this.setState({ [name]: value, currentStack: parseInt(value) })
        }
        this.setState({ [name]: value })
    };

    handleSubmitClick = () => {
        const { Word, Definition, StackId } = this.state;
        SubmitCard({ Word, Definition, StackId: parseInt(StackId) }).then()
    }
    Get = () => {
        axios.get('https://localhost:44393/api/collection')
            .then(res => {
                const data = res.data;
                console.log(data);
                this.setState({ Stacks: data })
            });
    }
    componentDidMount() {
        this.Get();
    }
    renderCard(card) {
        return <Card key={card.id} word={card.word} definition={card.definition} />
    }
    render() {
        return (
            <div>
                <select name='StackId' onChange={this.handleInputChange}>
                    <option value='1'>React</option>
                    <option value='2'>C#</option>
                    <option value='3'>Flutter</option>
                </select>
                <input type='text' name='Word' onChange={this.handleInputChange} />
                <div>
                    {this.state.word}
                </div>
                <input type='text' name='Definition' onChange={this.handleInputChange} />
                <button onClick={this.handleSubmitClick}>Submit</button>
                <br></br>
                {this.state.Stacks && this.state.Stacks.filter(stack => stack.id === this.state.currentStack).map(stack => stack.cards.map(card => this.renderCard(card)))}

            </div>
        )
    }
}
export default SubmitNew;