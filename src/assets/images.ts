// Image paths for reliable loading across environments
export const imagePaths = {
  bg: '/images/bg.jpg',
  vitals: '/images/vitals.jpg',
  about: '/images/about.jpg',
  about9: '/images/about-9.jpg',
  portfolio1: '/images/portfolio-1.jpg',
  portfolio2: '/images/portfolio-2.jpg',
  portfolio3: '/images/portfolio-3.jpg',
  portfolio4: '/images/portfolio-4.jpg',
  portfolio5: '/images/portfolio-5.jpg',
  portfolio6: '/images/portfolio-6.jpg',
  img1: '/images/IMG-20201130-WA0051.jpg',
  img2: '/images/IMG-20250815-WA0004.jpg',
  img3: '/images/IMG-20250815-WA0005.jpg',
  img4: '/images/IMG-20250815-WA0006.jpg',
  img5: '/images/IMG-20250815-WA0007.jpg',
};

export const getImagePath = (imageName: keyof typeof imagePaths): string => {
  return imagePaths[imageName];
};
