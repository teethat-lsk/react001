import decorator from './Card.module.css'
function Card(props) {

    return <div className={decorator.card}>{props.children}</div>;
    

}
export default Card