import { Button } from "@chakra-ui/button";
import { primaryLoginC } from "../Theme";

const ButtonX = ({title,loadingText,isLoading,w,alignSelf,Icon,h,position,left}) => {
    return(
        <Button
            isLoading={isLoading}
            loadingText={`${loadingText}...`}
            bgGradient={primaryLoginC}
            h={h}
            type="submit"
            color="#fff"
            size="sm"
            w={w}
            alignSelf={alignSelf}
            rightIcon={Icon}
            position={position}
            left={left}
            >
            {title}
          </Button>
    )
}

export default ButtonX ;