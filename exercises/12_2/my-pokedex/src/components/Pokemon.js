import React from 'react';

class Pokemon extends React.Component{
    render() {
        const {name, type, averageWeight, image} = this.props.pk;
        return (
        <div className="pokemon">
            <img src={image} alt={""}/><br/>
            <span>{name}</span><br/>
            <span>{type}</span><br/>
            <span>averageWeight: {averageWeight.value} {averageWeight.measurementUnit}</span>
        </div>
        )
    }
}

export default Pokemon;