<form onSubmit={(e) => {
    e.preventDefault();
    const data = [...this.state.data,
                  this.state.inputText];
    this.setState({data,inputText: ''});
}}> 
 <input
    type="text"
    name="inputText"
    value={this.state.inputText}
    onChange={(e) => {
      this.setState({[e.target.name]: e.target.value})  
    }}
 />   
</form>