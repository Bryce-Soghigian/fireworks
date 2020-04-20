import React, { useState, useEffect } from "react";
import { galaxy_function } from "react-planetary";
import * as THREE from "three";

export default function Main() {
  const [input, setInput] = useState();
  const [fireworkType, setFireworkType] = useState("DEFAULT");
  const [finalColor, setFinalColor] = useState("hasn't been submitted")
  //========Event functions ==========//
  const selectFireworkType = (e) => {
    e.preventDefault();
    console.log(e.target.value, "setFireworkState");
    return setFireworkType(e.target.value);
  };
  const SubmitFireworkColor = (e) => {
      e.preventDefault()
    return setFinalColor(input)
  };
  const updateState = (e) => {
      e.preventDefault()
      console.log(e.target.value)
      return setInput(e.target.value)
  };

  useEffect(() => {
    let renderer = new THREE.WebGLRenderer();
    let scene = new THREE.Scene();
    let camera_aspect = window.innerWidth / 400;
    let camera = new THREE.PerspectiveCamera(45, camera_aspect, 0.1, 1500);
    let cam_rotation = 0;
    let textureLoader = new THREE.TextureLoader();
    galaxy_function(textureLoader, scene);

    //========Config===============//
    renderer.setSize(window.innerWidth, 400);
    document.body.appendChild(renderer.domElement);
    scene.add(camera);
    //========Animation Loop=======//
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    //=======Clean up dom to remove adverse side affects of threejs

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div>
      {/* <optgroup className="firework-type"> */}
      <select className="firework-type" onChange={selectFireworkType}>
        <option>Choose type of firework</option>
        <option value="burst">Burst</option>
        <option>Creeper</option>
        <option value="star">Star</option>
        <option value="box">Box</option>
      </select>
      <div>
          Current Firework Type:{fireworkType}
      </div>
      {/* </optgroup> */}
      <form onChange={updateState}>
        <input placeholder="enter a color here" />
        <button onClick={SubmitFireworkColor} type="submit">
          Submit
        </button>
      </form>
      <div>
          Current Color Submission: {finalColor}
      </div>
    </div>
  );
}
