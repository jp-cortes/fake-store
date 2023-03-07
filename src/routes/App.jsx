import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedProdutcs from "../containers/FeedProducts";
import Layout from "@containers/Layout";
import Login from "@pages/Login";
import CreateAccount from "@pages/CreateAccount";
import EditAccount from "@pages/EditAccount";
import RecoveryPassword from '@pages/RecoveryPassword';
import Home from "@pages/Home";
import MyOrdersHistory from '@pages/MyOrdersHistory';
import NotFound from "@pages/NotFound";
import AppContext from "@context/AppContext.js";
import useInitialState from "@hooks/useInitialState.js";
import '@styles/global.css';

const App = () => {
    const initialState = useInitialState();
    return (
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/sign-up" element={<CreateAccount />} />
              <Route
                exact
                path="/my-orders-history"
                element={<MyOrdersHistory />}
              />
              <Route exact path="/edit-account" element={<EditAccount />} />
              <Route
                exact
                path="/recovery-password"
                element={<RecoveryPassword />}
              />
              <Route exact path="/products" element={<FeedProdutcs />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    );
}


export default App;