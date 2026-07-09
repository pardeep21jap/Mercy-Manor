import React from 'react'
import { Helmet } from "react-helmet";
import Banner from "../Banner";
import bannerImg from "../../assets/aboutbanner.webp";
import TheBenefitsOfMealPreparationServicesForSeniors from './TheBenefitsOfMealPreparationServicesForSeniors.jsx';
import Cta from '../Cta';



function Blogfourth() {
  return (
    <>
      <Helmet>
        <title>The Benefits of Meal Preparation Services for Seniors</title>
        <meta name="description" content="Avoid common mistakes while caring for a loved one with dementia. Learn 10 essential things not to do as a dementia caregiver." />
        <link rel="canonical" href="https://www.mercymanor.ca/the-benefits-of-meal-preparation-services-for-seniors" />

      </Helmet>
      <Banner title="The Benefits of Meal Preparation Services for Seniors"

        bannerImage={bannerImg} alt="mealprep service for seniors in home care" />
      <TheBenefitsOfMealPreparationServicesForSeniors />
      <Cta />
    </>
  )
}

export default Blogfourth
