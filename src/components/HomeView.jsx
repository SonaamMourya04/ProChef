import React from 'react'
import RecipeSlider from './RecipeSlider';
import TrendingRecipe from './TrendingRecipe';
import CategorySection from './CategorySelection';
import { API_URL } from './useFetch';


const HomeView = () => {
  return (
    <>

    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <RecipeSlider title="Staff Curated Picks" fetchUrl={`${API_URL}search.php?=c`}/>
      <TrendingRecipe title="Quick & Easy Meal" fetchUrl={`${API_URL}`}/>
      <CategorySection/>

    </main>
    </>
  )
}

export default HomeView;