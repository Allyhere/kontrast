import { CircleHalfTilt } from "@phosphor-icons/react";
import React from "react";

const EmptyPage = () => {
  return (
    <div className="empty-page">
      <CircleHalfTilt size={60} color="currentColor" />
      <p className="empty-page__text">
        Add a pair of colors to start checking!
      </p>
    </div>
  );
};

export default EmptyPage;
