import PropTypes from 'prop-types'
import { formatPrice } from '../utils';

const BarraComValor = ({valor, corDeFundo}) => {
    return (
        <div className='d-flex ms-3'>
            <div
        style={{
            background: corDeFundo,
            height: "20px",
            width: "4px",
        }} 
        >
        </div>
        <div className='ms-3' > {formatPrice(valor)}</div>
      </div>
    );
}

BarraComValor.propTypes = {
    valor: PropTypes.any,
    corDeFundo: PropTypes.any,

}
export default BarraComValor;