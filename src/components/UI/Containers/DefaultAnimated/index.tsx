
import { motion } from "framer-motion"


type DefaultAnimated = {
    children: React.ReactNode,
    width?: string | null,
    height?: string | null,
    durationEffect?: number
}

export const DefaultAnimated = ({children,width,height,durationEffect}: DefaultAnimated) => {
    return (
        <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
         transition={{duration: durationEffect ?? 0.8}}
         style={{
            width: width ?? ' auto',
            height: height ?? 'auto'
         }}
        >
            {children}
        </motion.div>
    )
}