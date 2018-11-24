// Props are immutable 

// class ShowText extend Component {
//     render(){
//         this.prop.text = "WRONG!";  // Cause a TypeError
    
//         this.prop = {}; // Never do this, this will break React inner component
    
//         this.prop.newProp = "Also Wrong" // Use default props instead!!!

//         return <div>{this.prop.text}</div>;
//     }
// }


// default props 
// Syntax 
// Class AttireList extends Component {
//     static defaultProps = {
//         Attires: []
//     }

//     render() {
//         return (
//             <ul>
//                 {this.props.Attires.map((v,i) => (
//                 <li key={i}>{v}</li>
//                 ))}
//             </ul>
//         );
//     }
// }

// Or Specify the defaultProps after Class declaration
// Class AttireList extends Component {
//     render() {
//         return (
//             <ul>
//                 {this.props.Attires.map((v,i) => (
//                 <li key={i}>{v}</li>
//                 ))}
//             </ul>
//         );
//     }
// }
// AttireList.defaultProps = {
//     Attires =[];
// }




// PropTypes 
// Developement time type checker for your props
// Installation: 
// npm install --save prop-types

// Some Examples: 
// import React, {Component} from 'react';
// import './Graduation.css';
// import PropTypes from 'prop-types';

// class Graduation extends Component {
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         people: PropTypes.string.isRequired,
//         img: PropTypes.string.isRequired,
//         attires: PropTypes.arrayOf(PropTypes.Object).isRequired
//     }
    
//     render() {
//         const {title, people, img} = this.props;
//         const attires = this.props.attires.map((v, i) => (
//             <li key={i}>{v}</li>
//         ));
//         return (
//             <div className="graduation-card">
//                 <div className="graduation-card-img">
//                      <img src={img} alt={title}/>
//                 </div>
//                 <div className="graduation-card-content">
//                      <h3 className="graduation-title"> {title} </h3>
//                      <h4>Attires:</h4>
//                      <ul>
//                         {attires}
//                      </ul>
//                      <h4>Who's in the picture:</h4>
//                      <p> {people} </p>
//                 </div>   
//             </div>
//         );
//     }
// }

// export default Graduation;