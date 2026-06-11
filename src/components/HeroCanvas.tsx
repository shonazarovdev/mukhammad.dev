import { useEffect, useRef } from "react";
import * as THREE from "three";

const WAVE_AMPLITUDE = 0.45;
const WAVE_FREQUENCY = 0.55;
const WAVE_SPEED = 0.6;

function buildGrid(cols: number, rows: number) {
    const count = cols * rows;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorA = new THREE.Color("#54c5f8");
    const colorB = new THREE.Color("#8a8a8a");
    const mixed = new THREE.Color();

    let i = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const x = (c / (cols - 1) - 0.5) * 18;
            const z = (r / (rows - 1) - 0.5) * 12;
            positions[i * 3] = x;
            positions[i * 3 + 1] = 0;
            positions[i * 3 + 2] = z;

            mixed.copy(colorB).lerp(colorA, Math.random() * 0.5);
            colors[i * 3] = mixed.r;
            colors[i * 3 + 1] = mixed.g;
            colors[i * 3 + 2] = mixed.b;
            i++;
        }
    }

    return { positions, colors };
}

export function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const container = canvas.parentElement;
        if (!container) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isCoarse = window.matchMedia("(pointer: coarse)").matches;

        const cols = isCoarse ? 70 : 130;
        const rows = isCoarse ? 40 : 70;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x0e0e0e, 6, 14);

        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
        camera.position.set(0, 2.2, 5.4);
        camera.lookAt(0, 0, 0);

        const { positions, colors } = buildGrid(cols, rows);
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.035,
            vertexColors: true,
            transparent: true,
            opacity: 0.85,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        const points = new THREE.Points(geometry, material);
        points.position.y = -1.4;
        scene.add(points);

        let rafId = 0;
        let targetRotX = 0;
        let targetRotY = 0;

        const resize = () => {
            const { clientWidth, clientHeight } = container;
            renderer.setSize(clientWidth, clientHeight, false);
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
        };

        const onPointerMove = (e: PointerEvent) => {
            const nx = (e.clientX / window.innerWidth) * 2 - 1;
            const ny = (e.clientY / window.innerHeight) * 2 - 1;
            targetRotY = nx * 0.12;
            targetRotX = ny * 0.06;
        };

        const updateWave = (time: number) => {
            const attr = geometry.getAttribute("position") as THREE.BufferAttribute;
            const arr = attr.array as Float32Array;
            for (let i = 0; i < arr.length; i += 3) {
                const x = arr[i];
                const z = arr[i + 2];
                arr[i + 1] =
                    Math.sin(x * WAVE_FREQUENCY + time * WAVE_SPEED) *
                    Math.cos(z * WAVE_FREQUENCY * 1.3 + time * WAVE_SPEED * 0.8) *
                    WAVE_AMPLITUDE;
            }
            attr.needsUpdate = true;
        };

        const renderFrame = (timeMs: number) => {
            const time = timeMs * 0.001;
            updateWave(time);
            points.rotation.y += (targetRotY - points.rotation.y) * 0.04;
            points.rotation.x += (targetRotX - points.rotation.x) * 0.04;
            renderer.render(scene, camera);
        };

        const loop = (timeMs: number) => {
            renderFrame(timeMs);
            rafId = requestAnimationFrame(loop);
        };

        resize();
        window.addEventListener("resize", resize);

        if (prefersReducedMotion) {
            renderFrame(1000);
        } else {
            window.addEventListener("pointermove", onPointerMove, { passive: true });
            rafId = requestAnimationFrame(loop);
        }

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onPointerMove);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />;
}
