import React from 'react';
import Lifecycle from './Lifecycle';


class ParentComponent extends React.Component{

    constructor(props){
        super(props)
        this.state =({
            showComponent:true
        })
    }
    toggleButton = () =>{
        this.setState((prevState)=>({
            showComponent: !prevState.showComponent
        }))
    }

    render(){
        const {showComponent} = this.state;
        return (
            <div>
                <button onClick={this.toggleButton}>  {showComponent? 'Unmount' : 'Mount' } </button>
                {showComponent ? (<Lifecycle/>) : (
                    <div>
                    <h1>Component unMounted</h1>
                    </div>
                )}
               
            </div>
        )
    }

}
export default ParentComponent