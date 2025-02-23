import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface ProjectProps {
    src: string;
    alt: string;
    tech: string;
    title: string;
}

export function Project({ src, title, tech, alt }: ProjectProps) {
    return (
        <div className="bg-transparent h-full rounded-lg !py-8 overflow-hidden">
        <img src={src} alt={alt} className="w-full h-48 object-cover" />
        <div className="p-4">
            <span className="text-sm text-gray-500">{tech}</span>
            <h3 className="text-xl font-semibold mt-2">{title}</h3>
        </div>
        </div>
    );
}

export default function Portfolio() {
    const projects = [
        {
        src: 'src/assets/Captura de tela de 2025-02-17 23-25-28.png',
        alt: 'Ak Modas Beach - Site',
        tech: 'React - Vite - Tailwind',
        title: 'Ak Modas Beach - Site',
        },
        {
            src: 'src/assets/Captura de tela de 2025-02-23 01-33-02.png',
            alt: 'Bead - Vite - Tailwind',
            tech: 'Vite + Tailwind',
            title: 'Yumyelp - Aplicativo Mobile',
        },
        {
        src: 'src/assets/Captura de tela de 2025-02-23 01-35-41.png',
        alt: 'Vivido - Aplicativo Mobile',
        tech: 'React Native + Expo',
        title: 'Cultmaps - Site',
        },
        {
        src: 'src/assets/Frame 7 (1).svg',
        alt: 'React Native - Expo - Tailwind',
        tech: 'React Native + Expo + Tailwind',
        title: 'Vivido denuncie - Aplicativo Mobile',
        },
    ];

    return (
    <div className="bg-neutral-800 w-[100%] h-full !m-auto flex flex-row items-start justify-between !p-8  rounded-2xl">
        <div className="container mx-auto h-max px-4">
            <h2 className="text-lg text-gray-200 font-bold text-start mb-4 outfit-font-500 ">Portfólio</h2>
            <p className="text-3xl bg-gradient-to-r outfit-font-300  from-purple-500 to-rose-400 bg-clip-text text-transparent outfit-font-700 text-start !mb-4">
                Trabalhos recentes
            </p>
            <Swiper
            slidesPerView={1}
            spaceBetween={50}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 3,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                <Project
                    src={project.src}
                    alt={project.alt}
                    tech={project.tech}
                    title={project.title}
                />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </div>
    );
}