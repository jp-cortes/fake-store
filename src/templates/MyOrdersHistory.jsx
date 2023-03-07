import React from "react";
import '@styles/MyOrdersHistory.module.scss';
import ArrowIcon from '@icons/flechita.png';

const MyOrdersHistory = () => {
    return (
      <>
        <main>
          <section className="my_orders">
            <div className="my_orders_container">
              <h1 className="my_orders_title">My orders</h1>

              <div className="my_orders_content">
                <div className="orders">
                  <p>
                    <span>03.25.22</span>
                    <span>6 articles</span>
                  </p>
                  <p>$560.00</p>
                  <img src={ArrowIcon} alt="arrow" />
                </div>
                
                
               
              </div>
              
            </div>
          </section>
        </main>
      </>
    );

}

export default MyOrdersHistory;