"use client";
import React, { useEffect, useState } from "react";

type ProductCardProps = {
  id: number;
};

const ProductCard = ({ id }: ProductCardProps) => {
  if (id) {
    return <section>"No id provided"</section>;
  }

  /**
   * Problem
   * Sometimes get error when use hooks after return statement.
   *
   * Cause
   * There are certain rules you must follow when using Hooks,
   * and one of the most important is that "Hooks can only be called at the top level."
   *
   *
   * Solution -> after.tsx
   */
  const [value, setValue] = useState(0);
  useEffect(() => {}, [value]);

  return <section>Hello world</section>;
};

export default ProductCard;
