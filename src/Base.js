import React from 'react';
import THREE from 'three';
import { findDOMNode } from 'react-dom';

class Base extends React.Component {

  componentDidMount() {
    // where you place objects , lights and cameras
    const scene = this.scene = new THREE.Scene();
    // camera with perspective projection
    // @params frustum, aspect retio, near and far
    const camera = this.camera = new THREE.PerspectiveCamera(75, 1, 1, 100);
    // display
    const renderer = this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });

    renderer.setClearColor(0xEEEEEE);
    renderer.setSize(300, 300);

    camera.position.x = 2;
    camera.position.y = 2;
    camera.position.z = 5;

    const draw = () => {
      requestAnimationFrame(draw);
      renderer.render(scene, camera);
      this.tick();
    };

    const axisHelper = new THREE.AxisHelper(5);

    scene.add(axisHelper);
    renderer.setClearColor(0xcccccc);
    draw();

    findDOMNode(this).appendChild(renderer.domElement);
  }

  tick() {

  }

  render() {
    return (
      <div className="base">
      </div>
    );
  }
}

Base.displayName = 'Base';

export default Base;
