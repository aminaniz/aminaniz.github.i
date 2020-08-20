class Card extends React.Component {   
    render() {
        return (
            <div> 
            { this.props.value }
            </div>
        );
    }
}

class CardContainer extends React.Component {   
    render() {
        var arr=["one", "two", "three", "four"];
        var elements=[];
        for(var i=0;i<arr.length;i++){
             // push the component to elements!
            elements.push(<Card value={ arr[i] } />);
        }
        
        return (
            <div> 
            {elements}
            </div>
        );
    }
}