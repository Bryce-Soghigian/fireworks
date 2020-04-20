import React,{useState,useEffect} from 'react'
import {galaxy_function} from 'react-planetary';
import * as THREE from 'three'


export default function Main() {
    const [input,setInput] = useState()
        useEffect(() => {
        let renderer = new THREE.WebGLRenderer();
        let scene = new THREE.Scene()
        let camera_aspect = window.innerWidth/400
        let camera =  new THREE.PerspectiveCamera(45, camera_aspect,0.1,1500)
        let cam_rotation = 0;
        let textureLoader = new THREE.TextureLoader();
        galaxy_function(textureLoader,scene)


        //========Config===============//
        renderer.setSize(window.innerWidth,400)
        document.body.appendChild(renderer.domElement)
        scene.add(camera)
        //========Animation Loop=======//
        const animate = () =>{
            requestAnimationFrame(animate)
            renderer.render(scene,camera)
        }
        animate()
        //=======Clean up dom to remove adverse side affects of threejs

        return () => {
            document.body.removeChild( renderer.domElement)
        }





        }, [])

    return (
        <div>
            
        </div>
    )
}
