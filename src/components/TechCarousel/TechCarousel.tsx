import React from 'react';

export default function TechCarousel() {
    const technologies = [
        { name: 'NestJS', src: 'https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png' },
        { name: 'TypeScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
        { name: 'Node.js', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
        { name: 'Express', src: 'https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp' },
        { name: 'React', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
        { name: 'Next.js', src: 'https://seeklogo.com/images/N/next-logo-E4C61C8BC0-seeklogo.com.png' },
        { name: 'Tailwind CSS', src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { name: 'MongoDB', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' },
        { name: 'PostgreSQL', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg' },
        { name: 'Python', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
        { name: 'Django', src: 'https://lh3.googleusercontent.com/proxy/Nswz8KFhqyEROl-sdraD-t7RiXcToUSa7hB4hjC_lHPtd6ZTbLkJUhZ-MqsudqFwQ5cO5CdyAc8WX87w1ZJl' },
        { name: 'Postman', src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'Figma', src: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
        { name: 'Git', src: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
        { name: 'Docker', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg' },
        { name: 'Materialize', src: 'https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg' }
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === technologies.length - 5 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full p-8 !mt-18 rounded-2xl">
            <div className="relative overflow-hidden !my-4">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / 5)}%)`,
                    }}
                >
                    {technologies.map((tech, index) => (
                        <div 
                            key={index}
                            className="flex-none w-1/5 px-2"
                        >
                            <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg">
                                <img 
                                    src={tech.src}
                                    alt={tech.name}
                                    className="w-12 h-12 object-contain"
                                />
                                <p className="text-sm md:text-base text-white">{tech.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}