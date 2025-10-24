import {motion, useScroll, useTransform} from 'motion/react';

export default function MotionCard({ className, style, children, id, direction='down' }:{className?: string, style?:any, id?:string, direction?:"left" | "right" | "up" | "down", children:any}) {
// état initial
  const initial = {
    opacity: 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    y: direction === "up" ? -50 : direction === "down" ? 50 : 0,
  };
  return (
    <motion.div
      initial={initial}  // de gauche à droite
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      style={style}
      id={id}
    >
      {children}
    </motion.div>
  )
}
