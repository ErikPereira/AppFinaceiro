import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';
import React from 'react';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}

