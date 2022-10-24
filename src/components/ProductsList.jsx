import React from "react";
import Card from "./Card";
import Search from "./Search";
function ProductsList() {
  return (
    <div className="flex flex-col h-4/5 justify-between 3xl:flex-row">
			<div className="h-1/5 mb-1 shadow-2xl 3xl:w-1/5 3xl:h-auto 3xl:m-0">
			<Search/>
			</div>
      <div className="h-5/6 p-5 flex flex-col overflow-scroll 3xl:w-4/5 3xl:h-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default ProductsList;
