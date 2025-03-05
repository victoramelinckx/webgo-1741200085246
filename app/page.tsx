
"use client";

import { Hero } from "./components/Hero";
import { How } from "./components/How";
import { Aboutus } from "./components/Aboutus";
import { BeforeAndAfter } from "./components/BeforeAndAfter";
import { Faq } from "./components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="¡Transforma Tu Negocio Con Webgo!"
              subheadline="Creamos páginas web expertas en vender, 100% optimizadas en velocidad, con textos persuasivos y tecnología avanzada de IA."
              cta1="Comienza Ahora"
              cta2="Aprende Más Sobre Nuestros Servicios"
            />

            <How
              step1Title="Consulta inicial"
              step1Desc="Iniciamos con una consulta para entender sus necesidades y objetivos empresariales. Analizamos su negocio y su mercado objetivo para planificar una estrategia de diseño web efectiva."
              step2Title="Diseño y Desarrollo"
              step2Desc="Nuestro equipo de expertos diseña y desarrolla una página web optimizada en velocidad, con textos persuasivos y la última tecnología AI para garantizar la máxima eficiencia y atractivo para sus clientes."
              step3Title="Lanzamiento y Optimización"
              step3Desc="Una vez que la página web está lista, la lanzamos y continuamos monitoreando y optimizando su rendimiento para garantizar que siempre esté en su mejor momento para atraer y convertir a sus clientes objetivo."
            />

            <Aboutus
              step1Title="Acerca de nosotros"
              step1Desc="Descripción"
              step2Title="Beneficio 1"
              step2Desc="Descripción beneficio 1"
              step3Title="Beneficio 2"
              step3Desc="Descripción beneficio 2"
            />
<Services />
<BeforeAndAfter />

            <Faq
              faqs={[{"pregunta":"¿Qué servicios ofrece Webgo?","respuesta":"Webgo es una empresa que se especializa en la creación de sitios web optimizados para la venta. Nos enfocamos en la velocidad, textos persuasivos, tecnología y sistemas de inteligencia artificial para ayudar a nuestros clientes a alcanzar sus objetivos de venta."},{"pregunta":"¿Cómo puede Webgo mejorar la velocidad de mi sitio web?","respuesta":"Nuestros expertos en desarrollo web utilizan las mejores prácticas y tecnologías para optimizar la velocidad de su sitio web. Esto incluye la minimización de los tiempos de carga, la optimización de las imágenes y la implementación de la tecnología de almacenamiento en caché, entre otras tácticas."},{"pregunta":"¿Cómo ayuda Webgo a hacer mis textos más persuasivos?","respuesta":"Contamos con copywriters expertos que saben cómo redactar textos de manera persuasiva para motivar a los visitantes de su sitio web a realizar una acción, ya sea comprar un producto, suscribirse a un boletín informativo o llenar un formulario de contacto."},{"pregunta":"¿Cómo puede Webgo integrar la inteligencia artificial en mi sitio web?","respuesta":"Podemos integrar sistemas de inteligencia artificial en su sitio web para mejorar la experiencia del usuario. Esto puede incluir chatbots para el servicio de atención al cliente, sistemas de recomendación personalizados y análisis de datos para entender mejor a su audiencia."},{"pregunta":"¿Cómo puede Webgo ayudar a mi sitio web a vender más?","respuesta":"Al combinar una velocidad de sitio optimizada, textos persuasivos, la última tecnología y sistemas de inteligencia artificial, podemos crear un sitio web que atraiga y retenga a los visitantes, y los motive a realizar una acción. Nuestro objetivo es convertir a los visitantes de su sitio web en clientes."}]}
            />
<BookAppoinment />
<Footer />
    </main>
  );
}
    