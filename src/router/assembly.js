import React from 'react';
import Loadable from '@@/Loadable'
const Login = Loadable(() =>
    import ('@/pages/login'))
const Home = Loadable(() =>
    import ('@/pages/home'))
const Reg = Loadable(() =>
    import ('@/pages/reg'))
const Charts = Loadable(() =>
    import ('@/pages/charts'))
const Table = Loadable(() =>
    import ('@/pages/table'))
const Sample = Loadable(() =>
    import ('@/pages/sample'))
const Form = Loadable(() =>
    import ('@/pages/form'))
export { Login, Home, Reg, Charts, Table, Sample, Form }