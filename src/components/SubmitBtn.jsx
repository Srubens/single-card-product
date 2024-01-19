import PropTypes from 'prop-types'
import { FaRegSquarePlus } from "react-icons/fa6";

const SubmitBtn = ({text, evt}) => {
    return <button className='btn btn-success ms-3' type='submit' onClick={evt} >
        <span >
            <FaRegSquarePlus/>
        </span> {text}
    </button>
}

SubmitBtn.propTypes = {
    text: PropTypes.any,
    evt: PropTypes.any
}
 
export default SubmitBtn;