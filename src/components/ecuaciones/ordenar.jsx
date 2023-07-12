function ordenar (interseccionAB) {
    for (let i = 1; i<interseccionAB.length; i++){
        for (let j = 0; j<interseccionAB.length-2; j++){
            if (interseccionAB[j]>interseccionAB[j+1]){
                const temp = interseccionAB[j];
                interseccionAB[j]=interseccionAB[j+1];
                interseccionAB[j+1]=temp;
            }
        }
    }
    return interseccionAB;
}

export default ordenar;