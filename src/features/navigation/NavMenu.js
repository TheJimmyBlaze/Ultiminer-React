
import NavItem from "./NavItem";

const NavMenu = () => {

    return (

        <div className="py-4 nav-menu">

            <NavItem
                icon="bolt"
                name="Mine"
                path="/"
            />
            <NavItem
                icon="fire"
                name="Smelt"
            />
            <NavItem
                icon="compass-drafting"
                name="Craft"
            />
            <NavItem
                icon="cubes-stacked"
                name="Inventory"
                path="/inventory"
            />
            <NavItem
                icon="person"
                name="Equipment"
            />
            <NavItem
                icon="tag"
                name="Shop"
            />
        </div>
    );
};

export default NavMenu;