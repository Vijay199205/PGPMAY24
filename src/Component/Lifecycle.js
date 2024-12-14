import React  from 'react';

class Lifecycle extends React.Component{

    constructor(props){
        super(props);
            this.state={
             count: 0   
            };
        console.log("consturctor called");

    }
    componentDidMount(){
        console.log("compontDidmount is called");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate is called");
        return nextState.count !== this.state.count;
    }
    
    componentDidUpdate(prevprops, prevstate){
        console.log("componentDidUpdate is called");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount is called");
    }
    incrementCount= () =>{
        this.setState((prevstate)=>({
            count:prevstate.count + 1
        }))
    };

        render(){
            console.log("render method is called");
            return(
                <div>
                    <h1>count: {this.state.count}</h1>
                    <button onClick={this.incrementCount}> Increament</button>
                </div>
            )
        }


}

export default Lifecycle