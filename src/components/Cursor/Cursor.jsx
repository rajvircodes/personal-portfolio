import { useEffect } from "react";

import MouseFollower from "mouse-follower";
import gsap from "gsap";

import "./Cursor.css";

const Cursor = () => {
    useEffect(() => {
        if (window.matchMedia("(max-width: 767px)").matches) {
            return;
        }

        MouseFollower.registerGSAP(gsap);

        const cursor = new MouseFollower({
            speed: 0.3,
            ease: "none",

            skewing: 0,
            skewingDelta: 0,
            skewingDeltaMax: 0,

            stateDetection: {
                "-pointer": "a, button",
                "-hidden": "input, textarea",
            },
        });

        return () => {
            cursor.destroy();
        };
    }, []);

    return null;
};

export default Cursor;