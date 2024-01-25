"use client";
import React, { useEffect, useState } from "react";

type ProductCardProps = {
  id: number;
};

const ProductCard = ({ id }: ProductCardProps) => {
  /**
   * Solution
   * Call Hooks at the Top Level
   *
   */
  const [value, setValue] = useState(0);
  useEffect(() => {}, [value]);

  return <section>{!id ? "No id provided" : <div>ID is {id}</div>}</section>;
};

export default ProductCard;
