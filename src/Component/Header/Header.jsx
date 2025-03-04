import React, { useContext } from 'react'
import classes from "./header.module.css"
import { FaSearch } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';



function Header() {

  const [{basket}, dispatch]=useContext(DataContext)
  const totalItem=basket?basket.reduce((amount,item)=>{
    return item.amount + amount
  }, 0):0;
  return (
    <div className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png "
                alt="Amazon Logo"
              />
            </Link>
            {/* delivery */}

            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliverd to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            {/* icon */}
            <FaSearch size={38} />
          </div>
          {/* right side link */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                alt=""
              />
              <select name=" id=">
                <option value="">EN</option>
              </select>
            </Link>

            <Link to="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>

            {/* orders */}

            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCartAdd size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>

      <LowerHeader />
    </div>
  );

};

export default Header

