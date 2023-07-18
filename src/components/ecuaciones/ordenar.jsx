function ordenar (interseccionAB) {
    for (let i = 0; i<interseccionAB.length; i++){
        for (let j = i+1; j<interseccionAB.length; j++){
            if (interseccionAB[i]>interseccionAB[j]){
                const temp = interseccionAB[i];
                interseccionAB[i]=interseccionAB[j];
                interseccionAB[j]=temp;
            }
        }
    }
    return interseccionAB;
}

export default ordenar;