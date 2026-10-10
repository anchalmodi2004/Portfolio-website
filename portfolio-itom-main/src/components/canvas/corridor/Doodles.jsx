import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { usePerformance } from '../../../context/PerformanceContext';
import { useAchievements } from '../../../context/AchievementsContext';

/**
 * Animated coffee steam puffs
 */
const CoffeeSteam = () => {
    const steamRef = useRef();
    useFrame((state) => {
        if (!steamRef.current) return;
        const t = state.clock.elapsedTime;
        steamRef.current.position.y = 0.2 + Math.sin(t * 3) * 0.04;
        steamRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.15);
    });

    return (
        <group ref={steamRef} position={[0, 0.15, 0.01]}>
            {[0, 1].map((i) => (
                <mesh key={i} position={[(i - 0.5) * 0.06, i * 0.08, 0]}>
                    <ringGeometry args={[0.015, 0.035, 16]} />
                    <meshBasicMaterial color="#333333" transparent opacity={0.5} side={THREE.DoubleSide} />
                </mesh>
            ))}
        </group>
    );
};

/**
 * Doodles Component - Hand-drawn Sketch Elements with Interactivity & Easter Eggs
 */
const Doodles = () => {
    const groupRef = useRef();
    const { tier } = usePerformance();
    const { unlockAchievement } = useAchievements();
    const [showCoffeeSteam, setShowCoffeeSteam] = useState(false);
    const isLowTier = tier === 'LOW';

    // Load all sketch textures
    const textures = useTexture({
        paperBall: '/textures/corridor/decorations/paper_ball.webp',
        paperAirplane: '/textures/corridor/decorations/paper_airplane.webp',
        pencil: '/textures/corridor/decorations/pencil.webp',
        coffeeCup: '/textures/corridor/decorations/coffee_cup.webp',
    });

    // Set color space for all textures
    Object.values(textures).forEach(tex => {
        tex.colorSpace = THREE.SRGBColorSpace;
    });

    return (
        <group ref={groupRef}>
            {/* Paper Airplane - click for 360 loop animation! */}
            <SketchElement
                texture={textures.paperAirplane}
                position={[0.5, 0.8, 0.3]}
                scale={0.55}
                rotationSpeed={0.15}
                floatSpeed={0.7}
                floatAmount={0.04}
                interactive={true}
                onClick={(anim) => {
                    unlockAchievement('airplane_loop');
                    gsap.to(anim, {
                        extraRotZ: anim.extraRotZ + Math.PI * 2,
                        duration: 0.9,
                        ease: 'power2.inOut'
                    });
                    gsap.to(anim, {
                        extraPosZ: 0.5,
                        duration: 0.45,
                        yoyo: true,
                        repeat: 1,
                        ease: 'power2.out'
                    });
                }}
            />

            {/* Paper Ball - click to bounce */}
            <SketchElement
                texture={textures.paperBall}
                position={[-0.9, -0.7, 0.4]}
                scale={0.4}
                rotationSpeed={0.4}
                floatSpeed={0.5}
                floatAmount={0.02}
                interactive={true}
                onClick={(anim) => {
                    gsap.to(anim, {
                        extraPosY: 0.4,
                        duration: 0.25,
                        yoyo: true,
                        repeat: 1,
                        ease: 'power2.out'
                    });
                    gsap.to(anim, {
                        extraRotZ: anim.extraRotZ + Math.PI,
                        duration: 0.5
                    });
                }}
            />

            {/* Second Paper Ball - upper left */}
            <SketchElement
                texture={textures.paperBall}
                position={[-1.3, 0.5, -0.2]}
                scale={0.3}
                rotationSpeed={-0.3}
                floatSpeed={0.6}
                floatAmount={0.03}
                interactive={true}
                onClick={(anim) => {
                    gsap.to(anim, {
                        extraPosY: 0.3,
                        duration: 0.2,
                        yoyo: true,
                        repeat: 1,
                        ease: 'power2.out'
                    });
                }}
            />

            {/* Pencil - under creative developer */}
            <SketchElement
                texture={textures.pencil}
                position={[0.7, -0.8, 0.5]}
                scale={0.5}
                rotationSpeed={0.1}
                floatSpeed={0.4}
                floatAmount={0.02}
                initialRotation={-0.4}
                interactive={true}
                onClick={(anim) => {
                    gsap.to(anim, {
                        extraRotZ: anim.extraRotZ + 0.5,
                        duration: 0.2,
                        yoyo: true,
                        repeat: 3
                    });
                }}
            />

            {/* Coffee Cup - click to wobble & steam! */}
            <SketchElement
                texture={textures.coffeeCup}
                position={[1.2, 0.6, -0.1]}
                scale={0.35}
                rotationSpeed={0.05}
                floatSpeed={0.35}
                floatAmount={0.025}
                interactive={true}
                onClick={(anim) => {
                    setShowCoffeeSteam(true);
                    unlockAchievement('coffee_steam');
                    gsap.to(anim, {
                        extraRotZ: 0.25,
                        duration: 0.08,
                        yoyo: true,
                        repeat: 5,
                        ease: 'power1.inOut',
                        onComplete: () => { anim.extraRotZ = 0; }
                    });
                }}
            >
                {showCoffeeSteam && <CoffeeSteam />}
            </SketchElement>

            {/* Minor decorative elements - HIDDEN on LOW tier for performance */}
            {!isLowTier && (
                <>
                    {/* Animated hand-drawn stars */}
                    <AnimatedStar position={[-1.5, 1.2, 0]} scale={0.1} speed={0.4} />
                    <AnimatedStar position={[1.6, 0.8, -0.5]} scale={0.08} speed={0.5} />
                    <AnimatedStar position={[-1.2, 0.1, 0.5]} scale={0.06} speed={0.3} />
                    <AnimatedStar position={[1.3, 1.4, -1]} scale={0.07} speed={0.6} />

                    {/* Hand-drawn circles */}
                    <DoodleCircle position={[1.2, -0.2, 0.2]} scale={0.05} />
                    <DoodleCircle position={[-1.3, 1.0, 0.3]} scale={0.04} />

                    {/* Squiggly decorative lines */}
                    <Squiggle position={[-1.6, 0.5, -0.3]} rotation={0.2} />
                    <Squiggle position={[1.4, 0.3, 0.2]} rotation={-0.3} />

                    {/* Thought bubble near avatar */}
                    <ThoughtBubble position={[0.9, 0.7, 0.5]} />
                </>
            )}
        </group>
    );
};

/**
 * Sketch Element - textured 2D element with floating and interactive animations
 */
const SketchElement = ({
    texture,
    position,
    scale = 0.3,
    rotationSpeed = 0.1,
    floatSpeed = 0.5,
    floatAmount = 0.03,
    initialRotation = 0,
    onClick,
    interactive = false,
    children
}) => {
    const ref = useRef();
    const animRef = useRef({ extraRotZ: 0, extraPosY: 0, extraPosZ: 0, scaleMult: 1 });
    const [dimensions, setDimensions] = useState({ width: 1, height: 1 });
    const [hovered, setHovered] = useState(false);

    // Calculate dimensions from texture
    useEffect(() => {
        if (texture.image) {
            const aspectRatio = texture.image.width / texture.image.height;
            setDimensions({
                width: scale * aspectRatio,
                height: scale
            });
        }
    }, [texture, scale]);

    useEffect(() => {
        if (hovered && interactive) {
            document.body.style.cursor = 'pointer';
        } else if (interactive) {
            document.body.style.cursor = 'auto';
        }
    }, [hovered, interactive]);

    useFrame((state) => {
        if (!ref.current) return;

        const time = state.clock.elapsedTime;

        // Gentle float + interactive offset
        ref.current.position.y = position[1] + Math.sin(time * floatSpeed + position[0]) * floatAmount + animRef.current.extraPosY;
        ref.current.position.z = position[2] + animRef.current.extraPosZ;

        // Rotation animation
        ref.current.rotation.z = initialRotation + Math.sin(time * rotationSpeed) * 0.1 + animRef.current.extraRotZ;

        // Subtle scale pulse
        const pulse = (1 + Math.sin(time * 1.5 + position[0] * 2) * 0.03) * animRef.current.scaleMult;
        ref.current.scale.setScalar(pulse);
    });

    const handleClick = (e) => {
        if (!interactive) return;
        e.stopPropagation();
        onClick?.(animRef.current, ref.current);
    };

    return (
        <group
            ref={ref}
            position={position}
            onClick={handleClick}
            onPointerOver={(e) => {
                if (interactive) {
                    e.stopPropagation();
                    setHovered(true);
                }
            }}
            onPointerOut={() => {
                if (interactive) setHovered(false);
            }}
        >
            {/* Shadow layer */}
            <mesh position={[0.01, -0.01, -0.01]}>
                <planeGeometry args={[dimensions.width, dimensions.height]} />
                <meshBasicMaterial color="#e0e0e0"
                    map={texture}
                    transparent={true}
                    opacity={0.15}
                    side={THREE.DoubleSide}
                    depthWrite={false}
                    alphaTest={0.5}
                />
            </mesh>
            {/* Main element */}
            <mesh>
                <planeGeometry args={[dimensions.width, dimensions.height]} />
                <meshBasicMaterial color="#e0e0e0"
                    map={texture}
                    transparent={true}
                    side={THREE.DoubleSide}
                    depthWrite={false}
                    alphaTest={0.5}
                />
            </mesh>
            {children}
        </group>
    );
};


/**
 * Animated rotating star - hand-drawn style
 */
const AnimatedStar = ({ position, scale = 0.1, speed = 0.5 }) => {
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            const time = state.clock.elapsedTime;
            ref.current.rotation.z = time * speed;
            ref.current.position.y = position[1] + Math.sin(time * 0.8 + position[0]) * 0.03;
            ref.current.scale.setScalar(scale * (1 + Math.sin(time * 2) * 0.15));
        }
    });

    return (
        <group ref={ref} position={position} scale={scale}>
            {[0, 1, 2, 3].map((i) => (
                <mesh key={i} rotation={[0, 0, (i * Math.PI) / 4]}>
                    <planeGeometry args={[1, 0.12]} />
                    <meshBasicMaterial color="#2a2a2a" transparent opacity={0.7} side={2} />
                </mesh>
            ))}
        </group>
    );
};

/**
 * Squiggly hand-drawn line
 */
const Squiggle = ({ position, rotation = 0 }) => {
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            const time = state.clock.elapsedTime;
            ref.current.position.x = position[0] + Math.sin(time * 0.5) * 0.02;
        }
    });

    return (
        <group ref={ref} position={position} rotation={[0, 0, rotation]}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <mesh key={i} position={[i * 0.07, Math.sin(i * 1.5) * 0.035, 0]}>
                    <circleGeometry args={[0.015, 8]} />
                    <meshBasicMaterial color="#444" transparent opacity={0.5} />
                </mesh>
            ))}
        </group>
    );
};

/**
 * Hand-drawn circle with pulsing animation
 */
const DoodleCircle = ({ position, scale = 0.08 }) => {
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            const time = state.clock.elapsedTime;
            const pulse = 1 + Math.sin(time * 2) * 0.1;
            ref.current.scale.setScalar(scale * pulse);
        }
    });

    return (
        <mesh ref={ref} position={position}>
            <ringGeometry args={[0.6, 1, 12]} />
            <meshBasicMaterial color="#333" transparent opacity={0.4} side={2} />
        </mesh>
    );
};

/**
 * Thought bubble - comic style with animated content
 */
const ThoughtBubble = ({ position }) => {
    const ref = useRef();
    const contentRef = useRef();

    useFrame((state) => {
        if (ref.current) {
            const time = state.clock.elapsedTime;
            ref.current.position.y = position[1] + Math.sin(time * 0.6) * 0.02;
        }

        if (contentRef.current) {
            // Pulsing content inside bubble
            const pulse = 0.8 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
            contentRef.current.material.opacity = pulse;
        }
    });

    return (
        <group ref={ref} position={position}>
            {/* Main bubble */}
            <mesh>
                <circleGeometry args={[0.12, 16]} />
                <meshBasicMaterial color="#fff" />
            </mesh>
            <mesh>
                <ringGeometry args={[0.11, 0.13, 16]} />
                <meshBasicMaterial color="#333" />
            </mesh>

            {/* Small bubbles leading to main */}
            <mesh position={[-0.1, -0.1, 0]}>
                <circleGeometry args={[0.035, 8]} />
                <meshBasicMaterial color="#fff" />
            </mesh>
            <mesh position={[-0.1, -0.1, 0]}>
                <ringGeometry args={[0.03, 0.04, 8]} />
                <meshBasicMaterial color="#333" />
            </mesh>

            {/* Content inside bubble - code icon */}
            <mesh ref={contentRef} position={[0, 0, 0.01]}>
                <planeGeometry args={[0.05, 0.06]} />
                <meshBasicMaterial color="#111111" transparent opacity={0.9} />
            </mesh>
        </group>
    );
};

export default Doodles;
