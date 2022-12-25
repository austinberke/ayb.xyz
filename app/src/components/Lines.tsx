import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const Lines: React.FC = () => {
  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(600, 400).parent(canvasParentRef);
    p5.stroke(0);
    p5.noFill();
    p5.strokeWeight(1); // Adjust stroke weight to 2 pixels
  };

  let xoff = 0;
  const draw = (p5: p5Types) => {
    p5.background(255);
    p5.beginShape();
    for (let i = 0; i < 5; i++) {
      let yoff = xoff + 20 * i;
      p5.beginShape();
      for (let x = 0; x <= p5.width; x += 4) {
        let y =
          p5.height / 2 +
          p5.sin(
            x * 0.001 + p5.width * p5.noise(xoff) * 0.005 + p5.frameCount * 0.01
          ) *
            50 +
          p5.noise(yoff) * p5.height -
          250;
        p5.curveVertex(x, y);
        yoff += 0.001;
      }
      p5.endShape();
      xoff += 0.001;
    }
  };
  return (
    <div className="mt-12 overflow-hidden">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default Lines;
