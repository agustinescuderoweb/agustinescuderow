// src/componentes/LottieAnimation.tsx
import  Lottie  from 'lottie-react';
import animationData from '../../../public/asset/web-design-layout.json'; // Asegúrate de ajustar la ruta

const LottieAnimation = () => {
    return (
    <div style={{ width: 600, height: 600 }}>
        <Lottie animationData={animationData} loop={true} />;
    </div>
    );
};

export default LottieAnimation;
