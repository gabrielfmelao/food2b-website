import { motion } from 'framer-motion';

const CheckAnimation = () => {
  return (
    <motion.div
      initial={{ scale: 0 }} // Escala inicial definida como 0
      animate={{ scale: 1, rotate: [0, 45, 0] }} // Animação de escala e rotação
      transition={{ duration: 0.5 }} // Duração da animação
      style={{ originX: 0.5, originY: 0.5 }} // Define o ponto de origem da transformação
      className='flex items-center'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-green-500"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </motion.div>
  );
};

export default CheckAnimation;
