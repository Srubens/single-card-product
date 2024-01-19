import {Link} from "react-router-dom"
import { generateAmountOptions } from "../utils";
import { useState } from "react";
import { FaRegHeart , FaHeart, FaSlidersH  }from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { CiSquareQuestion } from "react-icons/ci";
import cardP from '../assets/Carta_Counterspell.png'
import card1 from '../assets/Card_Carroussel-1.png'
import card2 from '../assets/Card_Carroussel-2.png'
// import card3 from '../assets/Card_Carroussel.png'
import {RenderComponent,BarraComValor, SubmitBtn, IconCustoMan} from "../components";
import {toast} from 'react-toastify'
import Icon from '../assets/Icon.png'
import iconC from '../assets/icon-c.png'


const SingleProduct = () => {
    const carrousel = [card1, card2, cardP]
    const [count, setCount] = useState(1)
    const [amount, setAmount] = useState(1)
    const [isOn, setIsOn] = useState(false)
    const [currentImage, setCurrentImage] = useState(cardP)

    const handleClickImage = (image) =>{
        setCurrentImage(image)
    }

    const handleClick = () =>{
        setIsOn(!isOn)
    }

    const handleCountMinus = () =>{
        setCount((count) => count - 1)
        if( count < 1 ){
            setCount(1)
        }
    }
    
    const handleCount = () =>{
        setCount((count) => count + 1)
    }

    const handleAmount = (e) =>{
        setAmount(e.target.value)
    }

    const handlerClickBtn = () =>{
        toast.success(`Cadastro com sucesso ${count} itens!`)
    }
    return (
        <section className="main_sigle_product" >
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-around mt-4 flex-column">
                    <div className="col-md-4 col-sm-4 col" >
                        <div className="d-flex flex-column m-auto">
                            <div className="col" >
                            <img className="images_destaque" src={currentImage} alt="Carta_Counterspell" />
                            
                            </div>
                            <div className="d-flex justify-content-between col-md-10 mt-4">
                                {carrousel.map((image) =>{
                                    return (
                                        <img className="images_details"  onClick={() => handleClickImage(image)} src={image} key={image} alt={image} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-8 col" >
                        <div className="main_content">
                            <div className="card-info">
                                <header >
                                    <div className="breadcrumbs ">
                                        <ul className="d-flex flex-md-row justify-content-start col-12 m-auto" >
                                            <li >
                                                <Link to="/" >Home</Link> <span>|</span>
                                            </li>
                                            <li >
                                                <Link to="/" >Magic: The Gathering</Link> <span>|</span>
                                            </li>
                                            <li >
                                                <Link to="/" >Busca</Link> <span>|</span>
                                            </li>
                                            <li >
                                                <Link to="/" >Bazar - Lista de Desejo</Link> 
                                            </li>
                                        </ul>
                                    </div>
                                </header>
                                <div className="card_main_select mt-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                        <img src={iconC} alt="icon-c" /> <b>#045</b> Dominaria Remastered
                                        </div>
                                        <div>|
                                        <select value={amount} name="select-card" id="select-card" onChange={handleAmount} >
                                            {generateAmountOptions(4)}
                                        </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_main_title" >
                                    <div className="d-flex flex-column flex-md-row justify-content-between mt-5">
                                        <div>
                                            <h3>Contramágica</h3>
                                            <small><i>Counterspell</i></small>
                                        </div>
                                        <div className="d-flex" >
                                            <div onClick={handleClick} className="me-4" >
                                                <span className="icon_figure">
                                                    {isOn ? (<FaHeart className='coracao_bordar' />): (<FaRegHeart className='coracao_bg' />)}
                                                </span>
                                            </div>
                                            <div>
                                                <SlOptions/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lista-compras mt-4 p-3">
                                <div className="d-flex">
                                    <h3>Lista de Compras</h3>
                                    <span className="icon-question ms-3" >
                                        <CiSquareQuestion/>
                                    </span>
                                </div>
                                <div>
                                    <p>Add a carta aqui e deixe que a Liga calcule o melhor preço pra você!</p>
                                </div>
                                <div className="d-flex">
                                    <div className="btn-group" role="group">
                                        <div className="btn btn-outline-primary"
                                        onClick={handleCountMinus}
                                        >-</div>
                                        <div className="btn" >{count}</div>
                                        <div className="btn btn-outline-primary" 
                                        onClick={handleCount}
                                         >+</div>
                                    </div>
                                    <span className="ms-3" >
                                    <FaSlidersH/> 
                                    </span>
                                    <SubmitBtn text={'Adicionar na lista'} evt={handlerClickBtn} />
                                </div>
                            </div>
                            <div className="card-chart">
                                <div className="d-flex justify-content-between align-items-center col-md-11 m-auto mt-4 mb-3">
                                    <div>
                                        <h5>Detalhes da Carta</h5>
                                    </div>
                                    <div >
                                        <Link to="/" className="link-red" >Ver Tudo</Link>
                                    </div>
                                </div>
                                <div className="bg-gray d-flex justify-content-between p-4">
                                    <div>Cor</div>
                                    <div>
                                        <span>Azul</span>
                                    </div>
                                </div>
                                <div className="bg-gray d-flex justify-content-between p-4">
                                    <div>Custo de Mana</div>
                                    <div>
                                        <RenderComponent component={IconCustoMan} count={2}/>
                                    </div>
                                </div>
                                <div className="bg-gray d-flex justify-content-between p-4">
                                    <div>Tipo</div>
                                    <div>
                                        Mágica Instantânea
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center col-md-11 m-auto mt-4 mb-3">
                                    <div className="d-flex">
                                        <h5>Preço Médio no Marketplace</h5>
                                        <span className="icon-question ms-3" >
                                            <CiSquareQuestion/>
                                        </span>
                                    </div>
                                    <div >
                                        <Link to="/" className="link-red" >Ver Tudo</Link>
                                    </div>
                                </div>
                                <div className="bg-gray d-flex justify-content-between p-4 flex-md-row flex-column">
                                    <div className="main_icon d-flex flex-row" >
                                        <img src={Icon} alt="icon" />
                                        <span className="ms-3" >Normal</span>
                                    </div>
                                    <div className="d-flex" >
                                        <BarraComValor valor={6.28} corDeFundo="#4CAF50" />
                                        &#x000A0;&#x000A0;&#x000A0;
                                        <BarraComValor valor={9.39} corDeFundo="#DDC80B" />
                                        &#x000A0;&#x000A0;&#x000A0;
                                        <BarraComValor valor={14} corDeFundo="#FF8B64" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default SingleProduct;