import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface SkillNode {
  name: string;
  level: number;
  category: string;
  position: [number, number, number];
}

const skills: SkillNode[] = [
  // AI/ML Category
  { name: "LLM Integration", level: 0.9, category: "AI/ML", position: [-2, 2, 0] },
  { name: "Real-time AI", level: 0.85, category: "AI/ML", position: [-1.5, 1.5, 1] },
  { name: "ML Models", level: 0.8, category: "AI/ML", position: [-1, 2, -1] },
  
  // Data Engineering Category
  { name: "ETL Pipelines", level: 0.95, category: "Data", position: [2, -1, 0] },
  { name: "FastAPI", level: 0.9, category: "Data", position: [1.5, -0.5, 1] },
  { name: "SQLAlchemy", level: 0.85, category: "Data", position: [1, -1, -1] },
  
  // Cloud Category
  { name: "AWS", level: 0.8, category: "Cloud", position: [0, -2, 2] },
  { name: "Azure", level: 0.85, category: "Cloud", position: [-0.5, -1.5, 1.5] },
  { name: "Docker", level: 0.9, category: "Cloud", position: [0.5, -2, 1] },
];

function SkillSphere({ skill, onClick }: { skill: SkillNode, onClick: (skill: SkillNode) => void }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group
      position={new THREE.Vector3(...skill.position)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => onClick(skill)}
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[skill.level * 0.3, 32, 32]} />
        <meshStandardMaterial
          color={
            skill.category === "AI/ML" 
              ? "#00ff00" 
              : skill.category === "Data" 
              ? "#00cc00" 
              : "#009900"
          }
          transparent
          opacity={hovered ? 0.8 : 0.6}
          emissive={hovered ? "#004400" : "#000000"}
        />
      </mesh>
      <Text
        position={[0, skill.level * 0.4, 0]}
        fontSize={0.15}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>
    </group>
  );
}

export default function SkillsVisualization() {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);

  return (
    <div className="relative h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {skills.map((skill, index) => (
          <SkillSphere
            key={index}
            skill={skill}
            onClick={setSelectedSkill}
          />
        ))}
        
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {selectedSkill && (
        <div className="absolute bottom-4 left-4 bg-black/90 p-4 rounded-lg border border-[#00ff00] text-[#00ff00]">
          <h3 className="text-lg font-bold">{selectedSkill.name}</h3>
          <p>Category: {selectedSkill.category}</p>
          <p>Proficiency: {Math.round(selectedSkill.level * 100)}%</p>
        </div>
      )}
    </div>
  );
}
