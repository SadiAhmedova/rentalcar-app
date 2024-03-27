import Link from 'next/link';
import React from 'react';
import '../styles/index.module.css'; 
import Navbar from '../components/navbar'
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import SearchCar from '../components/SearchCar';
import QuestionAnswer from '../components/QuestionAnswers';
import Slideshow from '../components/Slideshow';

export default function QandA() {
    return (
      <div>
        <CustomHeader title="Q&A" />
        <Navbar />  

        <div className="content">
          <div className="header">
            <SearchCar />
            <Slideshow />
          </div>

          <h1>Questions & Answers</h1>
            <QuestionAnswer /> 
        </div>
        <CustomFooter />

      </div>
    );
};