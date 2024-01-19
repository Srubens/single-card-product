import PropTypes from 'prop-types'

const RenderComponent = (props) => {
    const { component:Component, count } = props
    return (
        Array.from({length:count}).map((_, index)=>(
            <Component key={index} />
        ))
    );
}

RenderComponent.propTypes = {
    props: PropTypes.any
}
 
export default RenderComponent;