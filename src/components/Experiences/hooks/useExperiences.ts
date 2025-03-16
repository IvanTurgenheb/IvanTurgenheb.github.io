import { useMediaQuery } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"

const useExperiences = () => {
  const [isLessThan700] = useMediaQuery(["(max-width: 700px)"], {
    ssr: true,
    fallback: [false],
  })

  const { ref, inView } = useInView({ threshold: 0 })

  return {
    ref,
    inView,
    isLessThan700,
  }
}

export default useExperiences
