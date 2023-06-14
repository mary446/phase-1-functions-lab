function distanceFromHqInBlocks(block) {
    if (block>=42){
        return block-42;
    }else{
        return 42-block;
    }
}

function distanceFromHqInFeet(block){
    const feet=distanceFromHqInBlocks(block);
    return feet*264;

}

function distanceTravelledInFeet(start, end){
    return Math.abs((start-end)*264);
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500){
        return 'cannot travel that far'
      } else if (distance > 2000) {
        return 25;
      } else if (distance > 400){
        return 2.56;
      } else {
        return 0;
      }
  }
  