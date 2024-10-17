
import React from 'react';

export default class Fluid extends React.Component {
    
    constructor(props) {
    super(props);
      this.state = {
        style: {
            color: 'black',
            height: '100%', // Canvas is will respond to size changes without resetting fluid!
            width: '100%',
            background: 'black',
            margin: 0



          }
      };
  }

  // Basically when the component mounts it adds a <script> tag containing
  // the fluid sim logic which will execute once added, hooking into the <cavnas>
  componentDidMount() {
    const script = document.createElement("script");
    script.src = ".././src/components/fluid-init.js";
    script.async = true;
    script.onload = () => this.fluidLoaded();
    document.body.appendChild(script);
  }

  fluidLoaded() {
    console.log("WebGL Canvas Loaded // also a callback function if you need it.")
  }

  render() {
    return (
        <canvas className="fluid-canvas " style={this.state.style}></canvas>
    );
  }
}
