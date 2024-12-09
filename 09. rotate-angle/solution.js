function rotateAngleByDegrees(initialAngle, rotation) {
  // Calculate the new angle
  let newAngle = initialAngle + (rotation % 360);
  let finalAngle;
  if(newAngle > 360) {
    finalAngle = newAngle - 360; 
  } else if (newAngle < 0) {
    finalAngle = newAngle + 360;
  } else {
    finalAngle = newAngle;
  }
  return finalAngle === 360 ? 0:finalAngle;
}

module.exports = { rotateAngleByDegrees };
