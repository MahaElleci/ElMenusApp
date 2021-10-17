import MenuItem from "../MenuItem";

const MenuListing = ({data}) => {
    return ( 
        <div>
         {data && data.map(item => {
             return <MenuItem data={item} key={item.id} />
         })}
        </div>
     );
}
 
export default MenuListing;