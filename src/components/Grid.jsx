import { Instance, Instances } from "@react-three/drei";

const Grid = ({ number = 15, lineWidth = 0.046, height = 0.5, position = [0, 0, 0] }) => (
  <Instances position={position}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#ff0000" />
    <gridHelper args={[1000, 1000, "#5E5E5E", "#5E5E5E"]} position={[0, -0.02, 0]} />
  </Instances>
);

export default Grid;
