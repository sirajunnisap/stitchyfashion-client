import React,{useState,useEffect} from 'react';
import LandingPage from './Home';
import './style.css'

import { useNavigate } from 'react-router-dom';
import { getAllCategory } from '../../Services/Course/courseData';
import { categoryType } from '../../Models/Models';
function LoginedHome() {

    const [categoryData, setCategoryData] = useState<categoryType[] | undefined>(undefined)
    const navigate = useNavigate()
    useEffect(() => {

        const getCategory = async () => {
            try {

                const Category = await getAllCategory()
                setCategoryData(Category)

            } catch (error: any) {
                console.log(error);
            }
        }
        getCategory()
    }, [])

  return (
    <div>
      <div>
        <LandingPage />
      </div>
      <div className="mx-16 ">
      <section className="carousel my-40" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabIndex={0} className="carousel__slide">
            <div className="carousel__snapper">
              <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" tabIndex={0} className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide3" tabIndex={0} className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide4" tabIndex={0} className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide3" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide1" className="carousel__next">
              Go to first slide
            </a>
          </li>
        </ol>
        <aside className="carousel__navigation ">
          <ol className="carousel__navigation-list ">
            <li className="carousel__navigation-item ">
              <a href="#carousel__slide1" className="carousel__navigation-button">
                Go to slide 1
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide2" className="carousel__navigation-button">
                Go to slide 2
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide3" className="carousel__navigation-button">
                Go to slide 3
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide4" className="carousel__navigation-button">
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>

        <div>
            <h1 className='text-4xl font-bold font-serif mb-10'>Let's Start learning,User Name</h1>
        </div>

        <div>
  <ul className='flex space-x-3'>
    {categoryData?.map((category: categoryType, index) => {
      return (
        <li key={index}>
          <div className='w-[200px] h-[80px] bg-white text-teal-500 border border-black mb-20 relative hover:bg-teal-500 hover:text-white'>
            <div className='h-full flex items-center justify-center'>
              <p className='text-xl'>{category.name}</p>
            </div>
          </div>
        </li>
      )
    })}
  </ul>
</div>
      </div>
    </div>
  );
}

export default LoginedHome;
