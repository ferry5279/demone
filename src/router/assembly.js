import React from 'react';
import Loadable from '@@/Loadable'
const Login = Loadable(() =>
    import ('@/pages/login'))
const Home = Loadable(() =>
    import ('@/pages/home'))
const Reg = Loadable(() =>
        import ('@/pages/reg'))
    // const Mine = Loadable(() =>
    //     import ('@/pages/mine'))
    // const Login = Loadable(() =>
    //     import ('@/pages/login'))
    // const Study = Loadable(() =>
    //     import ('@/pages/study'))
export { Login, Home, Reg }