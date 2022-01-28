import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import ManageUserBlogs from './components/ManageUserBlogs/ManageUserBlogs'
import AddBlog from './components/AddBlog/AddBlog';
import Blogs from './components/Blogs/Blogs';
import BlogDetails from './components/BlogDetails/BlogDetails';
import PostAdminBlog from './components/AddAdminBlog/PostAdminBlog';
import AdminBlogs from './components/AdminBlogs/AdminBlogs';
import MakeAdmin from './components/MakeAdmin/MakeAdmin'
import TopSpot from './components/TopSpot/TopSpot';
import Khulna from './components/Khulna/Khulna';
import MangroveForest from './components/MangroveForest';
import Bandarban from './components/Bandarban/Bandarban';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          {/* header component calling above all  */}
          <Header></Header>

          <Switch>
            {/* basic website route-public  */}
            <Route exact path='/'>
              <Home></Home>
            </Route>
            {/* home route-public  */}
            <Route path='/home'>
              <Home></Home>
            </Route>
            {/* manageblog route-public  */}
            <PrivateRoute path='/manage'>
              <ManageUserBlogs></ManageUserBlogs>
            </PrivateRoute>
            {/* addblog route-public  */}
            <PrivateRoute path='/add'>
              <AddBlog></AddBlog>
            </PrivateRoute>
            {/* detailsblog route-public  */}
            <PrivateRoute path='/blogDetails/:Id'>
              <BlogDetails></BlogDetails>
            </PrivateRoute>
            {/* addblog route-public  */}
            <PrivateRoute path='/adminaddPost'>
              <PostAdminBlog></PostAdminBlog>
            </PrivateRoute>
            {/* addblog route-public  */}
            <PrivateRoute path='/adminPost'>
              <AdminBlogs></AdminBlogs>
            </PrivateRoute>
            {/* addblog route-public  */}
            <PrivateRoute path='/makeadmin'>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            {/* TopSpot route-public  */}
            <Route path='/topspot'>
              <TopSpot></TopSpot>
            </Route>
            <Route path='/khulna'>
              <Khulna></Khulna>
            </Route>
            <Route path='/sundorbon'>
              <MangroveForest></MangroveForest>
            </Route>
            <Route path='/bandarban'>
              <Bandarban></Bandarban>
            </Route>
            {/* login route-public  */}
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            {/* registration route-public  */}
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
          {/* footer component calling at the bottom  */}
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;

/*
<BrowserRouter>
          {/* header component calling above all  */
        //   <Header></Header>

        //   <Switch>
        //     {/* basic website route-public  */}
        //     <Route exact path='/'>
        //       <Home></Home>
        //     </Route>

        //     {/* success message after order route-public */}
        //     <Route path='/success'>
        //       <Success></Success>
        //     </Route>
        //     {/* home route-public  */}
        //     <Route path='/home'>
        //       <Home></Home>
        //     </Route>
        //     {/* allproducts route-public  */}
        //     <Route path='/allproducts'>
        //       <AllProducts></AllProducts>
        //     </Route>
        //     {/* login route-public  */}
        //     <Route path='/login'>
        //       <LogIn></LogIn>
        //     </Route>
        //     {/* registration route-public  */}
        //     <Route path='/register'>
        //       <Register></Register>
        //     </Route>


        //     {/* manage all orders route--private  */}
        //     <PrivateRoute path='/allorders'>
        //       <AllOrders></AllOrders>
        //     </PrivateRoute>
        //     {/* manage all products route--private  */}
        //     <PrivateRoute path='/manageproducts'>
        //       <ManageProducts></ManageProducts>
        //     </PrivateRoute>
        //     {/* make admin route--private  */}
        //     <PrivateRoute path='/makeadmin'>
        //       <MakeAdmin></MakeAdmin>
        //     </PrivateRoute>

        //     {/* single product order route--private && dynamic  */}
        //     <PrivateRoute exact path='/order/:_id'>
        //       <OrderNow></OrderNow>
        //     </PrivateRoute>
        //     {/* dashboard route--private  */}
        //     <PrivateRoute path='/dashboard'>
        //       <Dashboard></Dashboard>
        //     </PrivateRoute>





        //     {/* -------has to be last Route--------- */}
        //     <Route path="*">
        //       <NotFound></NotFound>
        //     </Route>
        //   </Switch>
        //   <Footer></Footer>
        //   {/* footer component calling at the bottom  */}
        // </BrowserRouter>
