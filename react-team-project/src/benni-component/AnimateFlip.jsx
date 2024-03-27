import { Box } from "@mui/material";
import { useEffect, useState } from "react"

export const AnimateFlip = ({ sx, ...props }) => {
    const [rotateY, setRotateY] = useState(0); // Aggiungo uno stato per controllare la rotazione

    useEffect(() => {
        if (props.type === "flip") {
            const timeout = setTimeout(() => {
                setRotateY(180); // Ruota di 180 gradi dopo un certo ritardo
            }, props.delay || 0);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [props.type, props.delay]);

    if (props.type === "fade") {
        return (
            <Box sx={{
                ...sx,
                transition: "opacity 1s ease",
                opacity: props.visible ? 1 : 0,
                transitionDelay: props.delay + "s" || "unset"
            }}>
                {props.children}
            </Box>
        );
    }

    return (
        <Box sx={{
            ...sx,
            transform: `translateY(${props.visible ? 0 : 1000}px) rotateY(${rotateY}deg)`, // Applico la trasformazione di rotazione
            transition: "transform 1s ease, opacity 2s ease",
            opacity: props.visible ? 1 : 0,
            transitionDelay: props.delay + "s" || "unset"
        }}>
            {props.children}
        </Box>
    );
};
