import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTshirtData,
  getTracksuitData,
  getTrouserData,
  getSweatShirtData,
} from "../Redux/AppReducer/action";
import { useEffect } from "react";
import SProductCard from "../Components/Products/SProductCard";
import ProductFooter from "../Components/Cart/ProductFooter";
import { SSideMenuFilter } from "../Components/Products/SSideMenuFilter";

//claver programmer
const STshirt = () => {
  const { TShirt, Tracksuit, Trouser, SweatShirt } = useSelector(
    (state) => state.AppReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getTshirtData());
    dispatch(getTracksuitData());
    dispatch(getTrouserData());
    dispatch(getSweatShirtData());
  }, []);
  // console.log(Tshirt);
  console.log("hello");

  return (
    <div style={{ position: "relative", top: "7rem" }}>
      <div>
        <SSideMenuFilter />
        <SProductCard data={TShirt} title="T-SHIRTS" />
      </div>
      <div>
        <SProductCard data={Tracksuit} title="TRACKSUITS" />
      </div>

      <div>
        <SProductCard data={Trouser} title="TROUSERS" />
      </div>

      <div>
        <SProductCard data={SweatShirt} title="SWEARTSHIRTS" />
      </div>
      <ProductFooter />
    </div>
  );
};

export default STshirt;
