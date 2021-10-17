import "./styles.scss";

const MenuItem = ({data}) => {

    return ( 
        <div className="menu-item__wrapper">  
        <div className="menu-item__wrapper__info">
            <h3>{data.name}</h3> 
            <span>{data.description}</span> 
            </div> 
            <div className="menu-item__wrapper__price">
                <span>{data.price}$</span>
            </div>
        </div>
     );
}
 
export default MenuItem;