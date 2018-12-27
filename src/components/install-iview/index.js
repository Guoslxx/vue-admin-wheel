import {
    Button,
    Row,
    Col,
    Table,
    Header,
    Sider,
    Footer,
} from 'iview'
export default{
    install(Vue){
        Vue.component('Button',Button);
        Vue.component('Row',Row);
        Vue.component('Col',Col);
        Vue.component('Table',Table);
        Vue.component('Header',Header);
        Vue.component('Sider',Sider);
        Vue.component('Footer',Footer);
    }
}