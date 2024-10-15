// app/ForecastContext.js
"use client";

import React, { createContext, useContext, useState } from 'react';

const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
  const [forecastData, setForecastData] = useState({ forecasts: [] });

  return (
    <ForecastContext.Provider value={{ forecastData, setForecastData }}>
      {children}
    </ForecastContext.Provider>
  );
};

export const useForecastData = () => useContext(ForecastContext);