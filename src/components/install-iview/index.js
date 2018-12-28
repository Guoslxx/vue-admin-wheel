import {
    Button,
    Row,
    Col,
    Table,
    Icon,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Menu,
    Submenu,
    MenuItem,
    Card,
    Breadcrumb,
    BreadcrumbItem 
} from 'iview'
export default{
    install(Vue){
        Vue.component('Button',Button);
        Vue.component('Row',Row);
        Vue.component('Col',Col);
        Vue.component('Table',Table);
        Vue.component('Icon',Icon);
        Vue.component('Dropdown',Dropdown);
        Vue.component('DropdownItem',DropdownItem);
        Vue.component('DropdownMenu',DropdownMenu);
        Vue.component('Menu',Menu);
        Vue.component('Submenu',Submenu);
        Vue.component('MenuItem',MenuItem);
        Vue.component('Card',Card);
        Vue.component('Breadcrumb',Breadcrumb);
        Vue.component('BreadcrumbItem',BreadcrumbItem);
    }
}