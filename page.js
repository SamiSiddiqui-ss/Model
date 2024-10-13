import React from 'react';
import Link from 'next/link';

export default function Home() {
  const courses = [
    { 
      Image: 'https://lights.com/cdn/shop/files/LC005263_LS1_RT-011500.jpg?v=1718309182&width=900', 
      title: 'Web Development', 
      description: 'Learn to build websites and web applications.' 
    },
    { 
      Image: 'https://lights.com/cdn/shop/files/LC005263_LS7_RT_1500.jpg?v=1718309182&width=900', 
      title: 'React Basics', 
      description: 'Introduction to React for building user interfaces.' 
    },
    { 
      Image: 'https://lights.com/cdn/shop/files/Haloween_FloatingCandles_LS1-RT_1500_bee40258-b600-4ceb-838a-d1063fbda923.jpg?v=1718309182&width=900', 
      title: 'Next.js', 
      description: 'Learn server-side rendering with Next.js.' 
    },
    { 
      Image: 'https://lights.com/cdn/shop/files/LC005399_LC004838_LC004841_1500_7d3e280f-f354-488a-bbc3-4f4880833259.jpg?v=1718309182&width=900', 
      title: 'Web Development', 
      description: 'Learn to build websites and web applications.' 
    },
    { 
      Image: 'https://lights.com/cdn/shop/files/LC005399_LC004838_LC004841_1500_7d3e280f-f354-488a-bbc3-4f4880833259.jpg?v=1718309182&width=900', 
      title: 'React Basics', 
      description: 'Introduction to React for building user interfaces.' 
    },
    { 
      Image: 'https://lights.com/cdn/shop/files/Holiday_19_LS1-RT1500.jpg?v=1718309182&width=900',
      title: 'Next.js', 
      description: 'Learn server-side rendering with Next.js.' 
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <Link href=''>
          <h1 className="text-2xl font-bold text-center">PRODUCTS</h1>
        </Link>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="p-4 border rounded-md shadow-sm transform transition-all duration-300 hover:bg-white hover:text-black hover:translate-y-[-10px] hover:shadow-lg "
            >
              <img src={course.Image} alt={course.title} className="w-full h-auto rounded-md mb-2" />
              <h2 className="text-xl text-center font-semibold">{index + 1}. {course.title}</h2>
              <p className='text-center'>{course.description}</p>
            </div>
          ))}
        </div>
        <Link href="/Body">
          <button className='p-4 border rounded-md shadow-sm mt-4 block mx-auto'>Press</button>
        </Link>
      </div>
    </>
  );
}
