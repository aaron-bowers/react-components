// TODO
// to create a React component you just write a function (with a
// capitalized name by convention) that returns JSX.

var GroceryList = (props) => (
  <ul>
      {props.items.map((groceryItem) => (
        <GroceryListItem item={groceryItem}/>
      )
      )}
  </ul>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done;
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    )
  }
}

var App = () => (
  <div>
      <h2>My Grocery List</h2>
      <GroceryList items={['Habanero Mango Salsa', 'Organic Black Bean Tortilla Chips', 'Avocados', 'AppleSauce']}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"));