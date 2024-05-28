import React from 'react'

function Card({ userName = 'AM' }) {
    //console.log(props)
    return (
        <div>

            <figure className="md:bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/23230552/pexels-photo-23230552/free-photo-of-a-person-walking-out-of-a-monumental-building-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' " alt="" width="384" height="512" />
                <div className="pt-6 text-center space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {userName}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            Staff Engineer, Algolia
                        </div>
                    </figcaption>
                </div>
            </figure>



        </div>
    )
}

export default Card



/* <img src='https://images.pexels.com/photos/23230552/pexels-photo-23230552/free-photo-of-a-person-walking-out-of-a-monumental-building-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
 <h1 className='text-2xl bg-black p-3 rounded'> A card for Photos</h1>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusamus possimus voluptate a harum adipisci deleniti veniam nam repellendus tempore. Possimus fugiat odio quo dolorum laboriosam ad vitae architecto maxime.</p> */



// here we have created the CARD component. so like this we can create other components also like Footer,Header etc...

