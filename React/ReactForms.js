import React, { Component } from 'react';
import './GraduationInput.css';


class GraduationInput extends Component {
    static defaultProps = {
        onClose() {},
        onSave() {}
    }
    
    constructor(props){
        super(props);
        
        this.state = {
             title:'',
             people: '',
             img: '',
             attires: []
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleNewAttire = this.handleNewAttire.bind(this);
        this.handleChangeAttire = this.handleChangeAttire.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
     handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

     handleNewAttire(e) {
        const {attires} = this.state;
        this.setState({attires: [...attires, '']});
      }
      
      handleChangeAttire(e) {
        const index = Number(e.target.name.split('-')[1]);
        const attires = this.state.attires.map((v, i) => (
          i === index ? e.target.value : v
        ));
        this.setState({attires});
      }
      
      handleSubmit(e) {
        e.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
          title: '',
          people: '',
          attires: [''],
          img: ''
        })
      }
    
    render() {
        const {title, people, img, attires} = this.state;
        const {onClose} = this.props;
        let attireInputs = attires.map((v,i) => (
            <div
                className="graduation-form-line"
                key={`attire-${i}`}
            >
                <label>{i+1}.
                    <input
                        type="text"
                        name= {`attire-${i}`}
                        value= {v}
                        size= {45}
                        autoComplete="off"
                        placeholder=" Attire"
                        onChange={this.handleChangeAttire}
                    />
                </label>
            </div>
        ));
        
        return(
             <div className="graduation-form-container">
                <form className="graduation-form" onSubmit={()=> {}}>
                    <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                    >
                        X
                    </button>
                    <div className="graduation-form-line">
                        <label htmlFor="graduation-title-input">Title</label>
                        <input
                          id="graduation-title-input"
                          key="title"
                          name="title"
                          type='text'
                          value={title}
                          size={42}
                          autoComplete="off"
                          onChange={this.handleChange}
                        />
                    </div>
                    <label 
                        htmlFor="graduation-people-input"
                        style={{marginTop: '5px'}}
                    >
                     People
                    </label>
                    <textarea
                        key="people"
                        id="graduation-people-input"
                        name="people"
                        rows="8"
                        cols="50"
                        autoComplete="off"
                        value={people}
                        onChange={this.handleChange}
                    />
                    {attireInputs}
                    <button
                        type="button"
                        onClick={this.handleNewAttire}
                        className="buttons"
                    >
                      + 
                    </button>
                    <div className ="graduation-form-line">
                        <label htmlFor="graduation-img-input">Image Url</label>
                        <input
                            id="graduation-img-input"
                            type="text"
                            placeholder=""
                            name="img"
                            value={img}
                            size={36}
                            autoComplete="off"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="buttons"
                        style={{alignSelf: 'flex-end', marginRight: 0}}
                    >
                      SAVE
                    </button>
                </form>
             </div>
        )
    }
}

export default GraduationInput;